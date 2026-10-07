/** @file Client-side utilities related to dev-mode-only pages */

import { type Actions, type ActionReturnType, type ActionError, isInputError } from "astro:actions";
import { createMessageBuilder } from "zod-validation-error/v3";

const storageKey = "wcag3-dev";

type Storage = {
  [K in keyof Actions]: ActionReturnType<Actions[K]>["data"];
};

function loadStorage() {
  const json = localStorage.getItem(storageKey);
  return json ? JSON.parse(json) : {};
}

/** Exposes functions for managing the localStorage key used by /dev/ pages. */
export const storage = {
  /** Deletes a key. */
  del(key: keyof Storage) {
    const data = loadStorage();
    delete data[key];
    localStorage.setItem(storageKey, JSON.stringify(data));
  },
  /** Retrieves a key's value. */
  get<K extends keyof Storage>(key: K): Storage[K] | null {
    return loadStorage()[key] ?? null;
  },
  /** Retrieves a key's value, then deletes it. */
  getAndDel<K extends keyof Storage>(key: K): Storage[K] | null {
    const value = storage.get(key);
    storage.del(key);
    return value;
  },
  /** Adds or updates a key's value. */
  set<K extends keyof Storage>(key: K, value: Storage[K]) {
    const data = loadStorage();
    data[key] = value;
    localStorage.setItem(storageKey, JSON.stringify(data));
  },
};

const resultEl = document.getElementById("result") as HTMLParagraphElement;

function resetResult() {
  resultEl.classList.remove("note--success", "note--error");
  resultEl.textContent = "";
}

function showResult(message: string, type: "error" | "success", focus?: boolean) {
  resetResult();
  resultEl.classList.add(`note--${type}`);
  resultEl.textContent = message;
  resultEl.hidden = false;
  if (focus) resultEl.focus();
}

/** Exposes functions for displaying results or errors. */
export const resultBox = {
  /** Hides the result box. */
  hide() {
    resultEl.hidden = true;
  },
  /** Displays an error message in the result box. */
  error(message: string) {
    // Error messages are displayed without a full page reload, so also focus the message
    showResult(message, "error", true);
  },
  /** Displays a success message in the result box. */
  success(message: string) {
    showResult(message, "success");
  }
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
