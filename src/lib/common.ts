/** @file Code shared between server and (dev-only) client */

import capitalize from "lodash/capitalize";

export interface IdToTitleOptions {
  capitalize: boolean;
}

/** Returns the rightmost slug portion of a collection ID. */
export function convertIdToSlug(id: string) {
  return id.replace(/^.*\//, "");
}

/** Performs the default logic for converting a collection ID to a title. */
export function convertIdToTitle(id: string, options: IdToTitleOptions) {
  const slug = convertIdToSlug(id);
  const title = slug.replace(/-/g, " ");
  return options.capitalize ? capitalize(title) : title;
}
