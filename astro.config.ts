import { defineConfig } from "astro/config";
// TODO: dynamically import cheerio only when needed,
// when https://github.com/withastro/astro/issues/12689 is resolved
import { load } from "cheerio";
import fg from "fast-glob";
import remarkDefinitionList from "remark-definition-list";
import remarkDirective from "remark-directive";

import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

import { guidelinesRehypePlugins, guidelinesRemarkPlugins } from "./src/lib/markdown/guidelines";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [remarkDirective, remarkDefinitionList, ...guidelinesRemarkPlugins],
    rehypePlugins: [...guidelinesRehypePlugins],
  },
  experimental: {
    contentIntellisense: true,
  },
  integrations: [
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
