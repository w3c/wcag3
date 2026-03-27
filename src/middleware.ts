import type { MiddlewareHandler } from "astro";
import { sequence } from "astro:middleware";
import { load } from "cheerio";
import GithubSlugger from "github-slugger";

import { informativeSlug } from "./lib/constants";

const processInformative: MiddlewareHandler = async ({ request, url }, next) => {
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

export const onRequest = sequence(processInformative);
