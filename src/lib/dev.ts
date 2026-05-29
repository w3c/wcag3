/** @file Server-side utilities related to dev-mode-only pages */

/** Collections that have actions exposed via the dev server */
export const devManageableCollections = ["groups", "guidelines", "requirements"] as const;
export type DevManageableCollection = (typeof devManageableCollections)[number];
