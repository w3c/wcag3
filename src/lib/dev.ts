/** @file Utilities related to dev-mode-only pages. */

import type { AstroSession } from "astro";
import type { ActionReturnType, Actions } from "astro:actions";

/** Stores an action result in the Astro session for recall on next page load. */
export function storeActionResult<K extends keyof Actions>(
  session: AstroSession | undefined,
  key: K,
  value: ActionReturnType<Actions[K]>
) {
  // @ts-ignore Error on value due to Astro's odd use of `intrinsic`
  session?.set(key, value);
}

/** Recalls an action result from the Astro session, then discards it so it is only used once. */
export async function getAndDiscardActionResult<K extends keyof Actions>(
  session: AstroSession | undefined,
  key: K
) {
  const result = (await session?.get(key)) as ActionReturnType<Actions[typeof key]> | undefined;
  session?.delete(key);
  return result || { data: undefined, error: undefined };
}
