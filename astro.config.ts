import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import { parseFrontmatter } from "@astrojs/markdown-remark";
import { load } from "cheerio";
import fg from "fast-glob";
import { remarkDefinitionList, defListHastHandlers } from "remark-definition-list";
import remarkDirective from "remark-directive";

import { readFile, writeFile } from "fs/promises";
import { basename, dirname, join } from "path";
import { fileURLToPath } from "url";

import { guidelinesRehypePlugins, guidelinesRemarkPlugins } from "./src/lib/markdown/guidelines";

const GH_REPO = process.env.GITHUB_REPOSITORY; // Only set during GitHub action

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  base: `${GH_REPO ? GH_REPO.slice(GH_REPO.indexOf("/")) : ""}/`,
  devToolbar: { enabled: false },
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkDirective, remarkDefinitionList, ...guidelinesRemarkPlugins],
    rehypePlugins: [...guidelinesRehypePlugins],
    remarkRehype: {
      // https://github.com/wataru-chocola/remark-definition-list/issues/50#issuecomment-1445130314
      handlers: { ...defListHastHandlers },
    },
  },
  experimental: {
    contentIntellisense: true,
    preserveScriptOrder: true,
  },
  integrations: [
    {
      /** Checks for mismatched children array vs. subdirectory contents */
      name: "children-check",
      hooks: {
        "astro:build:start": async () => {
          const groupsPath = join("guidelines", "groups");
          const groupFilenames = await fg.glob(join(groupsPath, "*.json"), {
            ignore: [join(groupsPath, "index.json")],
          });

          // Check at group level (index.json -> *.json)
          const listedCount = JSON.parse(
            await readFile(join(groupsPath, "index.json"), "utf8")
          ).length;
          const actualCount = groupFilenames.length;
          if (listedCount !== actualCount) {
            throw new Error(
              `Group index.json lists ${listedCount} children but there are ${actualCount} files`
            );
          }

          // Check at group->guideline level (*.json -> */*.md)
          for (const filename of groupFilenames) {
            const id = basename(filename, ".json");
            const data = JSON.parse(await readFile(filename, "utf8"));

            const actualCount = (await fg.glob(join(groupsPath, id, "*.md"))).length;
            if (data.children.length !== actualCount) {
              throw new Error(
                `Group ${id} lists ${data.children.length} children but has ${actualCount} files`
              );
            }
          }

          // Check at guideline level (*/*.md -> */*/*.md)
          for (const filename of await fg.glob(join(groupsPath, "*", "*.md"))) {
            const id = join(basename(dirname(filename)), basename(filename, ".md"));
            const data = parseFrontmatter(await readFile(filename, "utf8")).frontmatter;

            const actualCount = (await fg.glob(join(groupsPath, id, "*.md"))).length;
            if (data.children.length !== actualCount) {
              throw new Error(
                `Group ${id} lists ${data.children.length} children but has ${actualCount} files`
              );
            }
          }
        },
      },
    },
    {
      /** Filters output to reduce diff noise, esp. due to script/style/dependency updates */
      name: "diffable-html",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          if (!process.env.WCAG_DIFFABLE) return;
          const distPath = fileURLToPath(dir);
          const htmlPaths = await fg.glob("**/*.html", { cwd: distPath });
          const start = Date.now();
          for (const path of htmlPaths) {
            const filePath = join(distPath, path);
            const $ = load(await readFile(filePath));
            const assetPattern = /(\/_astro\/.*)\.[\w-]+_[\w-]+(\.[0-9a-z]+\b)/gi;

            $("meta[name='generator'], link, script, style").remove();
            $("*").each((_, el) => {
              if (!("attribs" in el)) return;
              for (const attr of Object.keys(el.attribs)) {
                if (attr.startsWith("data-astro-cid")) delete el.attribs[attr];
              }
              if (el.attribs.src) el.attribs.src = el.attribs.src.replace(assetPattern, "$1$2");
              if (el.attribs.srcset)
                el.attribs.srcset = el.attribs.srcset.replace(assetPattern, "$1$2");
            });
            await writeFile(filePath, $.html());
          }
          console.log(`Diffable plugin completed in ${Date.now() - start}ms`);
        },
      },
    },
  ],
});
