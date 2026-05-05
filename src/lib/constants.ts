/** Indicates that the build is running in a dev or PR preview environment. */
export const isDevOrPreview = !!import.meta.env.DEV || !!import.meta.env.NETLIFY;

/** Indicates that the build is for dev, PR preview, or ED (not publication to WAI site). */
export const isDraft = isDevOrPreview || !!import.meta.env.GITHUB_ACTION;

export const informativeSlug = "informative";
