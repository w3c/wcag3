import { getCollection, getEntry, type CollectionEntry, type RenderedContent } from "astro:content";
import { load } from "cheerio";
import noop from "lodash-es/noop";
import sortBy from "lodash-es/sortBy";
import pluralize from "pluralize";

import { computeGuidelineTitle, computeTermTitle } from "./guidelines";

/**
 * Wraps a function call to silence its console.warn calls,
 * e.g. for astro collection lookups where failures are anticipated.
 */
export async function silenceWarnings<F extends (...args: any) => any>(
  f: F
): Promise<ReturnType<F>> {
  const oldWarn = console.warn;
  console.warn = noop;
  const result = await f();
  console.warn = oldWarn;
  return result;
}

/**
 * Assembles data for informative documentation of the specified guideline,
 * including relevant details from normative data e.g. child order and title overrides.
 */
export async function resolveInformativeGuideline(id: string) {
  const normativeGuideline = await getEntry("guidelines", id);
  if (!normativeGuideline) throw new Error(`Normative data not found for guideline: ${id}`);

  const informativeGuideline = await silenceWarnings(() => getEntry("informativeGuidelines", id));
  if (!informativeGuideline) return null;
  return {
    ...informativeGuideline,
    title: computeGuidelineTitle(normativeGuideline),
    normativeEntry: normativeGuideline,
  };
}
export type InformativeGuideline = NonNullable<
  Awaited<ReturnType<typeof resolveInformativeGuideline>>
>;

/**
 * Assembles data for informative documentation of the specified requirement,
 * including relevant details from normative data e.g. child order and title overrides.
 */
export async function resolveInformativeRequirement(id: string) {
  const normativeRequirement = await getEntry("requirements", id);
  if (!normativeRequirement) throw new Error(`Normative data not found for requirement: ${id}`);

  const informativeRequirement = await silenceWarnings(() =>
    getEntry("informativeRequirements", id)
  );
  if (!informativeRequirement) return null;
  return {
    ...informativeRequirement,
    title: computeGuidelineTitle(normativeRequirement),
    normativeEntry: normativeRequirement,
  };
}
export type InformativeRequirement = NonNullable<
  Awaited<ReturnType<typeof resolveInformativeRequirement>>
>;

/**
 * Returns a list of IDs of groups containing informative content,
 * in the same order presented in the normative guidelines document.
 */
export async function resolveInformativeGroups() {
  const groups: (CollectionEntry<"groups"> & { title: string })[] = [];
  const populatedGroupIds = (await getCollection("informativeGuidelines")).reduce((set, entry) => {
    set.add(entry.id.slice(0, entry.id.indexOf("/")));
    return set;
  }, new Set<string>());

  for (const { id } of await getCollection("groupOrder")) {
    if (!populatedGroupIds.has(id)) continue;
    const group = await getEntry("groups", id);
    if (!group) throw new Error(`Unresolvable group ID: ${id}`);
    groups.push({
      ...group,
      title: computeGuidelineTitle(group),
    });
  }
  return groups;
}

/**
 * Assembles data for informative documentation of guidelines under the specified group,
 * including relevant details from normative data e.g. child order and title overrides.
 */
export async function resolveInformativeGuidelines(groupId: string) {
  const group = await getEntry("groups", groupId);
  if (!group) throw new Error(`Normative data not found for group: ${groupId}`);

  const guidelines: InformativeGuideline[] = [];
  for (const guidelineSlug of group.data.children) {
    const informativeGuideline = await resolveInformativeGuideline(`${groupId}/${guidelineSlug}`);
    if (informativeGuideline) guidelines.push(informativeGuideline);
  }
  return guidelines;
}

/**
 * Assembles data for informative documentation of requirements under the specified guideline,
 * including relevant details from normative data e.g. child order and title overrides.
 */
export async function resolveInformativeRequirements(guidelineId: string) {
  const normativeGuideline = await getEntry("guidelines", guidelineId);
  if (!normativeGuideline)
    throw new Error(`Normative data not found for guideline: ${guidelineId}`);

  const requirements: InformativeRequirement[] = [];
  for (const requirementSlug of normativeGuideline.data.children) {
    const informativeEntry = await resolveInformativeRequirement(
      `${guidelineId}/${requirementSlug}`
    );
    if (informativeEntry) requirements.push(informativeEntry);
  }
  return requirements;
}

/** Formats normative content for inclusion within an informative page. */
export function formatNormativeContent(rendered: RenderedContent) {
  const $ = load(rendered.html, null, false);
  $("summary").each((_, el) => {
    const $el = $(el);
    // Add child element to summaries to work with WAI excol styles
    if ($el.text() === $el.html()) $el.html(`<strong>${$el.text()}</strong>`);
  });

  return `
    <h2 id="normative-text">Normative Text</h2>
    <div class="normative">${$.html()}</div>
  `;
}

/** Inverted map from every possible permutation of each term to its content entry. */
const termResolutions: Record<string, CollectionEntry<"terms">> = {};
for (const entry of await getCollection("terms")) {
  for (const key of [computeTermTitle(entry), ...(entry.data.synonyms || [])]) {
    termResolutions[key.toLowerCase()] = entry;
    // Support plurals the same way ReSpec does
    const alt = pluralize.isSingular(key) ? pluralize.plural(key) : pluralize.singular(key);
    termResolutions[alt.toLowerCase()] = entry;
  }
}

/**
 * Resolves a term, synonym, or plural to the originating term.
 * This is exposed for use by informative documentation logic;
 * it is generally unneeded in the normative document where ReSpec handles it.
 */
const resolveTerm = (term: string) => termResolutions[term.toLowerCase()] || null;

/**
 * Processes <a>...</a> within rendered HTML into key terms,
 * adding hrefs and also returning the alphabetized list of terms.
 */
export function processKeyTerms(html: string) {
  const $ = load(html, null, false);
  const terms = new Set<CollectionEntry<"terms">>();
  $("a:not([href])").each((_, el) => {
    const $el = $(el);
    const text = $el.text().trim();
    const term = resolveTerm(text);
    if (term) {
      terms.add(term);
      $el.attr("href", `#dfn-${term.id}`);
    } else {
      console.warn(`Unable to resolve a glossary term for "${text}"`);
      $el.replaceWith($el.html()!);
    }
  });

  return {
    html: $.html(),
    terms: sortBy(Array.from(terms), (entry) => computeTermTitle(entry).toLowerCase()),
  };
}
