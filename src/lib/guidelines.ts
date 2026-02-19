import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import capitalize from "lodash/capitalize";
import difference from "lodash/difference";

import { isDevOrPreview } from "./constants";

/**
 * Returns a list of requirement/assertion slugs under the given group and guideline that would be
 * skipped for a major publication (i.e. exploratory/placeholder or needs additional research).
 * Note this returns an empty array when building for situations that do not allow for skipping
 * either at build time or client-side (e.g. Editor's Drafts).
 */
async function determineSkippableRequirements(groupId: string, guidelineSlug: string) {
  // Only populate when running a build that needs to skip at build time or client-side
  if (!import.meta.env.WCAG_SKIP_WIP && !isDevOrPreview) return [];

  const guideline = await getEntry("guidelines", `${groupId}/${guidelineSlug}`);
  if (!guideline) throw new Error(`Unresolvable guideline ID: ${guidelineSlug}`);

  const skippableRequirements: string[] = [];
  for (const requirementSlug of guideline.data.children) {
    const requirement = await getEntry(
      "requirements",
      `${groupId}/${guidelineSlug}/${requirementSlug}`
    );
    if (!requirement) throw new Error(`Unresolvable requirement ID: ${requirementSlug}`);
    if (
      requirement.data.needsAdditionalResearch ||
      requirement.data.status === "placeholder" ||
      requirement.data.status === "exploratory"
    ) {
      skippableRequirements.push(requirementSlug);
    }
  }
  return skippableRequirements;
}

/** Extension of Requirement to facilitate client-side skipping in previews */
interface SkippableRequirement extends CollectionEntry<"requirements"> {
  skippable?: boolean;
}

let groupIds = (await getCollection("groupOrder")).map(({ id }) => id);
let groups: Record<string, CollectionEntry<"groups">> = {};
let guidelines: Record<string, CollectionEntry<"guidelines">> = {};
let requirements: Record<string, SkippableRequirement> = {};

async function validateTags({ id, data }: CollectionEntry<"requirements">) {
  if (!data.tags) return;
  for (const tagRef of data.tags) {
    if (!(await getEntry(tagRef)))
      throw new Error(`Requirement ${id} references unknown tag: ${tagRef.id}`);
  }
}

export async function buildGuidelinesHierarchy() {
  // Cache collated collection data for subsequent calls
  if (!Object.keys(groups).length) {
    for (const groupId of groupIds) {
      const group = await getEntry("groups", groupId);
      if (!group) throw new Error(`Unresolvable group ID: ${groupId}`);
      groups[group.id] = group;

      for (const guidelineSlug of group.data.children) {
        const guideline = await getEntry("guidelines", `${groupId}/${guidelineSlug}`);
        if (!guideline) throw new Error(`Unresolvable guideline ID: ${guidelineSlug}`);
        guidelines[guideline.id] = guideline;

        const skippableChildren = await determineSkippableRequirements(groupId, guidelineSlug);
        if (import.meta.env.WCAG_SKIP_WIP)
          // Filter children directly in case of build-time skip
          guideline.data.children = difference(guideline.data.children, skippableChildren);

        for (const requirementSlug of guideline.data.children) {
          const requirement = await getEntry(
            "requirements",
            `${groupId}/${guidelineSlug}/${requirementSlug}`
          );
          if (!requirement) throw new Error(`Unresolvable requirement ID: ${requirementSlug}`);
          await validateTags(requirement);
          requirements[requirement.id] = skippableChildren.includes(requirementSlug)
            ? { ...requirement, skippable: true }
            : requirement;
        }
      }
    }
  }

  return groupIds.map((groupId) => ({
    ...groups[groupId],
    data: {
      ...groups[groupId].data,
      guidelines: groups[groupId].data.children.map((guidelineSlug) => {
        const guideline = guidelines[`${groupId}/${guidelineSlug}`];
        return {
          ...guideline,
          data: {
            ...guideline.data,
            requirements: guideline.data.children.map(
              (requirementSlug) => requirements[`${groupId}/${guidelineSlug}/${requirementSlug}`]
            ),
          },
        };
      }),
    },
  }));
}

export interface EntryWithTitle {
  id: string;
  collection: CollectionKey;
  data: { title?: string };
}

interface ComputeTitleOptions {
  capitalize: boolean;
}

function computeTitle(entry: EntryWithTitle, options: ComputeTitleOptions) {
  if (entry.data.title) return entry.data.title;
  const slug = entry.id.replace(/^.*\//, "");
  const title = slug.replace(/-/g, " ");
  return options.capitalize ? capitalize(title) : title;
}

/**
 * Returns group/guideline/requirement/assertion title if specified,
 * or falls back to converting from its slug.
 */
export const computeGuidelineTitle = (entry: EntryWithTitle) =>
  computeTitle(entry, { capitalize: true });

/** Returns term title if specified, or falls back to converting from its slug. */
export const computeTermTitle = (entry: CollectionEntry<"terms">) =>
  computeTitle(entry, { capitalize: false });
