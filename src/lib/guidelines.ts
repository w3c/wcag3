import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import capitalize from "lodash-es/capitalize";

let groupIds = (await getCollection("groupOrder")).map(({ id }) => id);
let groups: Record<string, CollectionEntry<"groups">> = {};
let guidelines: Record<string, CollectionEntry<"guidelines">> = {};
let requirements: Record<string, CollectionEntry<"requirements">> = {};

/**
 * Returns a filtered list of guideline slugs under the given group, excluding any that would
 * become empty upon filtering the guideline's children based on environment variables.
 */
async function getFilteredGuidelines(groupId: string) {
  const group = await getEntry("groups", groupId);
  if (!group) throw new Error(`Unresolvable group ID: ${groupId}`);

  const filteredSlugs: string[] = [];
  for (const guidelineSlug of group.data.children) {
    const requirements = await getFilteredRequirements(groupId, guidelineSlug);
    if (requirements.length) filteredSlugs.push(guidelineSlug);
  }
  return filteredSlugs;
}

/**
 * Returns a filtered list of requirement/assertion slugs under the given group and guideline,
 * excluding any marked as needing additional research if WCAG_SKIP_RESEARCH is set.
 */
async function getFilteredRequirements(groupId: string, guidelineSlug: string) {
  const guideline = await getEntry("guidelines", `${groupId}/${guidelineSlug}`);
  if (!guideline) throw new Error(`Unresolvable guideline ID: ${guidelineSlug}`);

  const filteredRequirements: string[] = [];
  for (const requirementSlug of guideline.data.children) {
    const requirement = await getEntry(
      "requirements",
      `${groupId}/${guidelineSlug}/${requirementSlug}`
    );
    if (!requirement) throw new Error(`Unresolvable requirement ID: ${requirementSlug}`);
    if (requirement?.data.needsAdditionalResearch && import.meta.env.WCAG_SKIP_RESEARCH) continue;
    filteredRequirements.push(requirementSlug);
  }
  return filteredRequirements;
}

export async function buildGuidelinesHierarchy() {
  // Cache collated collection data for subsequent calls
  if (!Object.keys(groups).length) {
    for (const groupId of groupIds) {
      const group = await getEntry("groups", groupId);
      if (!group) throw new Error(`Unresolvable group ID: ${groupId}`);
      group.data.children = await getFilteredGuidelines(groupId);
      groups[group.id] = group;

      for (const guidelineSlug of group.data.children) {
        const guideline = await getEntry("guidelines", `${groupId}/${guidelineSlug}`);
        if (!guideline) throw new Error(`Unresolvable guideline ID: ${guidelineSlug}`);
        guideline.data.children = await getFilteredRequirements(groupId, guidelineSlug);
        guidelines[guideline.id] = guideline;

        for (const requirementSlug of guideline.data.children) {
          const requirement = await getEntry(
            "requirements",
            `${groupId}/${guidelineSlug}/${requirementSlug}`
          );
          if (!requirement) throw new Error(`Unresolvable requirement ID: ${requirementSlug}`);
          requirements[requirement.id] = requirement;
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

/** Returns entry title if specified, or falls back to converting from its slug. */
export function computeTitle(entry: EntryWithTitle) {
  if (entry.data.title) return entry.data.title;
  const slug = entry.id.replace(/^.*\//, "");
  return capitalize(slug.replace(/-/g, " "));
}
