#!/usr/bin/env node
/**
 * Fails when developing-or-higher content references a glossary term that is
 * still at placeholder status, and reports related hygiene problems:
 *   - placeholder terms referenced from exploratory content (informational)
 *   - terms flagged unusedDefinition that are in fact referenced (informational)
 *   - placeholder terms nothing references (candidates for removal)
 *
 * Implements suggestion 1 of https://github.com/w3c/wcag3/issues/972
 * Zero dependencies. Usage: node scripts/check-term-status.mjs [repo-root]
 *
 * Note: reference resolution here is deliberately simple (exact slug plus a
 * naive singular fallback). It is not a linter for unknown references; the
 * build already has its own resolution strategy. The goal is only to resolve
 * enough references to police the placeholder dependency rule and the
 * unusedDefinition flags.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const STATUS_ORDER = ["placeholder", "exploratory", "developing", "refining", "mature"];
const FAIL_THRESHOLD = "developing"; // source content at this status or higher must not depend on placeholders

const root = process.argv[2] ?? ".";
const rel = (p) => relative(root, p).split(sep).join("/");

/** Recursively collect file paths matching a predicate. */
function walk(dir, keep, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, keep, out);
    else if (keep(p)) out.push(p);
  }
  return out;
}

/** Minimal frontmatter reader for the flat key: value subset used here. */
function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) return {};
  const end = text.indexOf("\n---", 4);
  if (end === -1) return {};
  const fm = {};
  for (const line of text.slice(4, end).split("\n")) {
    const m = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, raw] = m;
    fm[key] = raw.replace(/^["']|["']$/g, "").trim();
  }
  return fm;
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Naive singularization of the last word, enough for plural references like images. */
function singularize(phrase) {
  const words = phrase.split(/\s+/);
  const last = words[words.length - 1];
  if (/s$/.test(last) && !/(ss|us|is)$/.test(last)) words[words.length - 1] = last.slice(0, -1);
  return words.join(" ");
}

// --- Load terms: slug -> { status, unusedDefinition, keys (resolvable aliases) }
const termsDir = join(root, "guidelines", "terms");
const terms = new Map();
for (const p of readdirSync(termsDir).filter((f) => f.endsWith(".md"))) {
  const fm = parseFrontmatter(readFileSync(join(termsDir, p), "utf8"));
  const slug = p.replace(/\.md$/, "");
  const keys = new Set([slug]);
  if (fm.title) keys.add(slugify(fm.title));
  if (fm.synonyms) {
    for (const s of fm.synonyms.replace(/^\[|\]$/g, "").split(",")) {
      const k = slugify(s);
      if (k) keys.add(k);
    }
  }
  terms.set(slug, { file: rel(join(termsDir, p)), status: fm.status, unusedDefinition: fm.unusedDefinition === "true", keys });
}

function resolveTerm(refText) {
  const wanted = slugify(refText);
  for (const t of terms.values()) if (t.keys.has(wanted)) return t;
  const single = slugify(singularize(refText));
  if (single !== wanted) for (const t of terms.values()) if (t.keys.has(single)) return t;
  return null;
}

// --- Scan term and provision/group markdown for :term[...] references
const scanFiles = [
  ...walk(termsDir, (p) => p.endsWith(".md")),
  ...walk(join(root, "guidelines", "groups"), (p) => p.endsWith(".md")),
];

const hardFails = [];  // developing-or-higher source -> placeholder term
const softDeps = [];   // exploratory source -> placeholder term
const refCounts = new Map(); // term slug -> number of references found

for (const file of scanFiles) {
  const fm = parseFrontmatter(readFileSync(file, "utf8"));
  const srcStatus = fm.status ?? "exploratory"; // provision schema default; term files here always carry status
  const body = readFileSync(file, "utf8");
  for (const match of body.matchAll(/:term\[([^\]]+)\]/g)) {
    const term = resolveTerm(match[1]);
    if (!term) continue;
    const where = rel(file);
    const slug = [...terms.entries()].find(([, t]) => t === term)[0];
    refCounts.set(slug, (refCounts.get(slug) ?? 0) + 1);
    if (term.status !== "placeholder") continue;
    const line =
      `${where} (status: ${srcStatus}) references placeholder term "${slug}" (${term.file})`;
    if (STATUS_ORDER.indexOf(srcStatus) >= STATUS_ORDER.indexOf(FAIL_THRESHOLD)) hardFails.push(line);
    else softDeps.push(line);
  }
}

const staleFlags = [...terms.entries()]
  .filter(([slug, t]) => t.unusedDefinition && (refCounts.get(slug) ?? 0) > 0)
  .map(([slug, t]) => `${t.file} is flagged unusedDefinition but is referenced ${refCounts.get(slug)} time(s)`);
const orphanPlaceholders = [...terms.entries()]
  .filter(([slug, t]) => t.status === "placeholder" && !refCounts.has(slug))
  .map(([slug, t]) => `${t.file} (${slug}) is placeholder and referenced by nothing`);

// --- Report
const section = (title, lines) => {
  console.log(`\n${title} (${lines.length})`);
  lines.forEach((l) => console.log(`  ${l}`));
};
section("Placeholder terms referenced from developing-or-higher content", hardFails);
section("Placeholder terms referenced from exploratory content (informational)", softDeps);
section("Stale unusedDefinition flags (informational)", staleFlags);
section("Placeholder terms nothing references (informational)", orphanPlaceholders);

console.log(
  hardFails.length === 0
    ? "\nOK: no developing-or-higher content depends on a placeholder term."
    : `\nFAIL: ${hardFails.length} developing-or-higher item(s) depend on placeholder terms.`
);
process.exit(hardFails.length === 0 ? 0 : 1);
