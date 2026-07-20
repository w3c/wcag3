import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import capitalize from "lodash/capitalize";
import difference from "lodash/difference";

import { convertIdToTitle, type IdToTitleOptions } from "./common";
import { isDevOrPreview } from "./constants";

/**
 * Returns a list of provision slugs under the given group and guideline that would be
 * skipped for a major publication (i.e. exploratory/placeholder or needs additional research).
 * Note this returns an empty array when building for situations that do not allow for skipping
 * either at build time or client-side (e.g. Editor's Drafts).
 */
async function determineSkippableProvisions(groupId: string, guidelineSlug: string) {
  // Only populate when running a build that needs to skip at build time or client-side
  if (!import.meta.env.WCAG_SKIP_WIP && !isDevOrPreview) return [];

  const guideline = await getEntry("guidelines", `${groupId}/${guidelineSlug}`);
  if (!guideline) throw new Error(`Unresolvable guideline ID: ${guidelineSlug}`);

  const skippableProvisions: string[] = [];
  for (const provisionSlug of guideline.data.children) {
    const provision = await getEntry(
      "provisions",
      `${groupId}/${guidelineSlug}/${provisionSlug}`
    );
    if (!provision) throw new Error(`Unresolvable provision ID: ${provisionSlug}`);
    if (
      provision.data.needsAdditionalResearch ||
      provision.data.status === "placeholder" ||
      provision.data.status === "exploratory"
    ) {
      skippableProvisions.push(provisionSlug);
    }
  }
  return skippableProvisions;
}

/** Extension of Provision to facilitate client-side skipping in previews */
interface SkippableProvision extends CollectionEntry<"provisions"> {
  skippable?: boolean;
}

let groupIds = (await getCollection("groupOrder")).map(({ id }) => id);
let groups: Record<string, CollectionEntry<"groups">> = {};
let guidelines: Record<string, CollectionEntry<"guidelines">> = {};
let provisions: Record<string, SkippableProvision> = {};

async function validateTags({ id, data }: CollectionEntry<"provisions">) {
  if (!data.tags) return;
  for (const tagRef of data.tags) {
    if (!(await getEntry(tagRef)))
      throw new Error(`Provision ${id} references unknown tag: ${tagRef.id}`);
  }
}

// Compute hierarchy ahead-of-time and build flat basename map at the same time,
// partly to check for duplicates, partly to assist with informative templates/data

/** Object hash mapping provision slugs to fully-qualified IDs */
export const provisionSlugMap: Record<string, string> = {};
export const groupsTree = await (async () => {
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

        const skippableChildren = await determineSkippableProvisions(groupId, guidelineSlug);
        if (import.meta.env.WCAG_SKIP_WIP)
          // Filter children directly in case of build-time skip
          guideline.data.children = difference(guideline.data.children, skippableChildren);

        for (const provisionSlug of guideline.data.children) {
          const provision = await getEntry(
            "provisions",
            `${groupId}/${guidelineSlug}/${provisionSlug}`
          );
          if (!provision) throw new Error(`Unresolvable provision ID: ${provisionSlug}`);
          if (provisionSlug in provisionSlugMap)
            throw new Error(
              `Duplicate provision filename: ${provisionSlug} (found at ${
                provisionSlugMap[provisionSlug]
              } and ${groupId}/${guidelineSlug}/${provisionSlug})`
            );
          provisionSlugMap[provisionSlug] = provision.id;
          await validateTags(provision);
          provisions[provision.id] = skippableChildren.includes(provisionSlug)
            ? { ...provision, skippable: true }
            : provision;
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
            provisions: guideline.data.children.map(
              (provisionSlug) => provisions[`${groupId}/${guidelineSlug}/${provisionSlug}`]
            ),
          },
        };
      }),
    },
  }));
})();

export interface EntryWithTitle {
  id: string;
  collection: CollectionKey;
  data: { title?: string };
}

const computeTitle = (entry: EntryWithTitle, options: IdToTitleOptions) =>
  entry.data.title || convertIdToTitle(entry.id, options);

/**
 * Returns group/guideline/provision title if specified,
 * or falls back to converting from its slug.
 */
export const computeGuidelineTitle = (entry: EntryWithTitle) =>
  computeTitle(entry, { capitalize: true });

/** Returns a provision's issue label as it should be formatted in the GitHub repository. */
export const computeProvisionIssueLabel = (entry: CollectionEntry<"provisions">) =>
  `P - ${capitalize(entry.data.issueLabel) || computeGuidelineTitle(entry).replace(/,/g, "")}`;

/**
 * Returns text representation of each provision type,
 * useful e.g. in front of each provision name in the normative document,
 * and for the heading above the normative text in each informative document.
 */
export const computeProvisionTypeLabel = (entry: CollectionEntry<"provisions">) => {
  var provisionType = entry.data.type;
  if (!provisionType) return "Requirement";
  if (provisionType === "foundational" || provisionType === "supplemental")
    return `${capitalize(provisionType.replace(/^foundational$/, "core"))} requirement`;
  return capitalize(provisionType);
};

/** Returns term title if specified, or falls back to converting from its slug. */
export const computeTermTitle = (entry: CollectionEntry<"terms">) =>
  computeTitle(entry, { capitalize: false });
