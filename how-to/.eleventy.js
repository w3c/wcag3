const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const listOutcomes = require('./build/list-outcomes');

module.exports = function(eleventyConfig) {
  // Ignore a couple things
  eleventyConfig.ignores.add('**/readme.md');
  eleventyConfig.ignores.add('_build/**');
  eleventyConfig.ignores.add('**/_template/**');

  // Global data
  eleventyConfig.addGlobalData("layout", "layout.html");
  eleventyConfig.addGlobalData("outcomes", listOutcomes().outcomes);
  eleventyConfig.addGlobalData("eleventyComputed", { "eleventyNavigation": ({ eleventyNavigation, page }) => {
    return { key: (eleventyNavigation && eleventyNavigation.key) || page.fileSlug };
  }});

  // Make it easy to deploy to gh-pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Provide a navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  const dir = {
    input: "./outcomes",
    includes: "../_includes" // relative to dir.input
  }

  return { dir }
};
