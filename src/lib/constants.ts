/** Indicates that the build is running in a dev or PR preview environment. */
export const isDevOrPreview = !!import.meta.env.DEV || !!import.meta.env.NETLIFY;
