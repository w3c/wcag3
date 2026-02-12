import type { MiddlewareHandler } from "astro";
import { sequence } from "astro:middleware";
import { load } from "cheerio";
import { informativeSlug } from "./lib/constants";

const addInformativeTableOfContents: MiddlewareHandler = async ({ url }, next) => {
  if (!url.pathname.startsWith(import.meta.env.BASE_URL + informativeSlug)) return next();

  const response = await next();

  const html = await response.text();
  const $ = load(html);
  const tocList$ = $("nav.navtoc ul");
  if (!tocList$.length) return new Response(html, response);

  $("h2[id]").each((_, el) => {
    const $el = $(el);
    tocList$.append(`<li><a href="#${$el.attr("id")}">${$el.text()}</a></li>`);
  });

  return new Response($.html(), response);
};

export const onRequest = sequence(addInformativeTableOfContents);
