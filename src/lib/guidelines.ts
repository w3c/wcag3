import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import capitalize from "lodash-es/capitalize";

let groupIds = (await getCollection("groupOrder")).map(({ id }) => id);
let groups: Record<string, CollectionEntry<"groups">> = {};
let guidelines: Record<string, CollectionEntry<"guidelines">> = {};
let requirements: Record<string, CollectionEntry<"requirements">> = {};

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
