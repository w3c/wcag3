const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { dirname } = require("path");
const listOutcomes = require("./build/list-outcomes");

function formatSlug(str) {
  if (!str) return;
  const parts = str.split("-");
  return parts.map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

module.exports = function (eleventyConfig) {
  // Ignore a couple things
  eleventyConfig.ignores.add("**/readme.md");
  eleventyConfig.ignores.add("_build/**");
  eleventyConfig.ignores.add("**/_template/**");

  // Global data
  eleventyConfig.addGlobalData("layout", "layout.html");
  eleventyConfig.addGlobalData("outcomes", listOutcomes().outcomes);

  // Make it easy to deploy to gh-pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  // Custom breadcrumb filter based entirely on paths + page titles
  eleventyConfig.addFilter("breadcrumbs", function (collection) {
    function findParent(page) {
      const resolvedInputBase = dirname(
        page.inputPath.replace(/\/index\.md$/, "")
      );
      const possibleInputPaths = [
        `${resolvedInputBase}/index.md`,
        `${resolvedInputBase}.md`,
      ];
      return collection.find(({ data }) =>
        possibleInputPaths.includes(data.page.inputPath)
      )?.data;
    }

    const crumbs = [];
    let current = collection.find(
      ({ data }) => data.page.inputPath === this.page.inputPath
    ).data;
    while (current) {
      crumbs.push(
        `<li><a href="${current.page.url}"${
          !crumbs.length ? ` aria-current="page"` : ""
        }>${current.title || formatSlug(current.page.fileSlug)}</a></li>`
      );
      current = findParent(current.page);
    }
    return crumbs.reverse().join("\n");
  });

  const dir = {
    input: "./outcomes",
    includes: "../_includes", // relative to dir.input
  };

  return { dir };
};
