/** @file Utilities related to dev-mode-only pages */

import type { AstroSession } from "astro";
import {
  ActionError,
  deserializeActionResult,
  isInputError,
  serializeActionResult,
  type ActionReturnType,
  type Actions,
} from "astro:actions";
import { createMessageBuilder } from "zod-validation-error/v3";

/** Stores an action result in the Astro session for recall on next page load. */
export function storeActionResult<K extends keyof Actions>(
  session: AstroSession | undefined,
  key: K,
  value: ActionReturnType<Actions[K]>
) {
  // @ts-ignore Error on value due to Astro's odd use of `intrinsic`
  session?.set(key, serializeActionResult(value));
}

/** Recalls an action result from the Astro session, then discards it so it is only used once. */
export async function getAndDiscardActionResult<K extends keyof Actions>(
  session: AstroSession | undefined,
  key: K
) {
  const result = await session?.get(key);
  session?.delete(key);
  return result
    ? (deserializeActionResult(result) as ActionReturnType<Actions[typeof key]>)
    : { data: undefined, error: undefined };
}

const messageBuilder = createMessageBuilder({ includePath: false });

/**
 * Formats an action's error message appropriately,
 * particularly if it originated from a zod validation failure.
 */
export function getActionErrorMessage(error: ActionError) {
  // Note: This needs to use MessageBuilder directly rather than fromError
  // because Astro wraps the error such that zod-validation-error no longer recognizes it
  return isInputError(error) && error.issues.length
    ? messageBuilder(error.issues as [(typeof error.issues)[number], ...typeof error.issues])
    : error.message;
}
