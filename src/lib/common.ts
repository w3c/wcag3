/** @file Code shared between server and client */

import capitalize from "lodash/capitalize";

export interface IdToTitleOptions {
  capitalize: boolean;
}

export function idToSlug(id: string) {
  return id.replace(/^.*\//, "");
}

export function idToTitle(id: string, options: IdToTitleOptions) {
  const slug = idToSlug(id);
  const title = slug.replace(/-/g, " ");
  return options.capitalize ? capitalize(title) : title;
}
