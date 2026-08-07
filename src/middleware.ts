import type { MiddlewareHandler } from "astro";
import { sequence } from "astro:middleware";
import { load } from "cheerio";
import GithubSlugger from "github-slugger";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

import { informativeSlug } from "./lib/constants";

const restrictDevAndSSR: MiddlewareHandler = async ({ isPrerendered, url }, next) => {
  // /dev/... and non-prerendered pages should only be available when running the dev server
  if (
    !import.meta.env.DEV &&
    (!isPrerendered || url.pathname.startsWith(import.meta.env.BASE_URL + "dev/"))
  )
    return new Response(null, { status: 404 });
  return next();
};

const processInformative: MiddlewareHandler = async ({ url }, next) => {
  if (!url.pathname.startsWith(import.meta.env.BASE_URL + informativeSlug)) return next();

  const response = await next();
  if (response.headers.get("Content-Type") !== "text/html") return response;

  const html = await response.text();
  const $ = load(html);

  // Ensure all level-2 headings have ids; if missing, generate based on content
  const slugger = new GithubSlugger();
  $("h2:not([id])").each((_, el) => {
    el.attribs.id = slugger.slug($(el).text());
  });

  // If a table of contents list exists, populate it based on h2 elements
  const tocList$ = $("nav.navtoc ul");
  if (tocList$.length) {
    $("h2[id]").each((_, el) => {
      const $el = $(el);
      tocList$.append(`<li><a href="#${$el.attr("id")}">${$el.text()}</a></li>`);
    });
  }

  return new Response($.html(), response);
};

const servePublicIndex: MiddlewareHandler = async ({ url }, next) => {
  if (import.meta.env.DEV && url.pathname.endsWith("/")) {
    const filePath = join(process.cwd(), "public", url.pathname, "index.html");
    if (existsSync(filePath)) {
      return new Response(readFileSync(filePath, "utf-8"), {
        headers: { "Content-Type": "text/html" },
      });
    }
  }
  return next();
};

export const onRequest = sequence(servePublicIndex, restrictDevAndSSR, processInformative);
