import { rehypeHeadingIds, type RehypePlugin, type RemarkPlugin } from "@astrojs/markdown-remark";
import type { VFile } from "vfile";
import { visit } from "unist-util-visit";
import { existsSync, readFileSync } from "fs";
import { basename, extname, join } from "path";

import { informativeSlug } from "../constants";

export const isInformativeFile = (file: VFile) =>
  file.dirname?.startsWith(join(file.cwd, informativeSlug));

const customDirectives: RemarkPlugin = () => (tree, file) => {
  if (!isInformativeFile(file)) return;

  if (
    !tree.children.length ||
    (tree.children.length === 1 && tree.children[0].type === "heading")
  ) {
    tree.children.push({
      type: "containerDirective",
      name: "ednote",
      children: [
        {
          type: "paragraph",
          children: [{ type: "text", value: "This content needs to be written." }],
        },
      ],
    });
  }
};

/** Attempts to resolve an example file from the equivalent public/ subdirectory. */
function resolveExamplePath(file: VFile, label: string): string | undefined {
  const rule = basename(file.basename || "", ".md");
  const relativeDir = (file.dirname || file.cwd).slice(file.cwd.length + 1);
  const examplesDir = join(file.cwd, "public", relativeDir, rule, "examples");
  const filePath = join(examplesDir, label);
  return existsSync(filePath) ? filePath : undefined;
}

/** Removes excess indentation common across all non-empty lines. */
function dedent(text: string): string {
  const lines = text.split("\n");
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^( *)/)![1].length);
  const min = Math.min(...indents);
  return min > 0 ? lines.map((l) => l.slice(min)).join("\n") : text;
}

function extractCodeRef(raw: string, filePath: string, file: VFile, ref?: string): string | undefined {
  // Find all opening tags with the boolean data-code-ref attribute
  const allMatches = [...raw.matchAll(/<(\w+)\b[^>]*\bdata-code-ref\b[^>]*>/g)];

  let openMatch: RegExpMatchArray;
  if (ref) {
    const found = allMatches.find(m => new RegExp(`\\bid="${ref}"`).test(m[0]));
    if (!found) {
      file.fail(`No [data-code-ref] element with id="${ref}" found in: ${filePath}`);
    }
    openMatch = found;
  } else if (allMatches.length === 1) {
    openMatch = allMatches[0];
  } else if (allMatches.length > 1) {
    file.fail(
      `Multiple [data-code-ref] elements found in: ${filePath}. ` +
      `Use #id to specify which one.`
    );
  } else {
    // No data-code-ref found; fall back to <body>
    const bodyMatch = raw.match(/<(body)\b[^>]*>/);
    if (!bodyMatch) {
      file.fail(`No [data-code-ref] or <body> element found in: ${filePath}`);
    }
    openMatch = bodyMatch;
  }

  const tagName = openMatch[1];
  const afterOpen = openMatch.index! + openMatch[0].length;
  const rest = raw.slice(afterOpen);

  // Find matching close tag by tracking depth
  const tagRe = new RegExp(`<${tagName}\\b|</${tagName}>`, "g");
  let depth = 1;
  let match: RegExpExecArray | null;
  while ((match = tagRe.exec(rest)) !== null) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return dedent(rest.slice(0, match.index));
  }

  file.fail(`No matching </${tagName}> found in: ${filePath}`);
}

const exampleCode: RemarkPlugin = () => (tree, file) => {
  if (!isInformativeFile(file)) return;

  visit(tree, (node, index, parent) => {
    if (node.type !== "leafDirective" || node.name !== "example-code") return;
    if (!parent || typeof index === "undefined") return;

    const firstChild = node.children?.[0];
    const rawLabel = firstChild?.type === "text" ? firstChild.value : undefined;
    if (!rawLabel) {
      file.fail(`::example-code requires a path like ::example-code[{example-name}/index.html]`);
      return;
    }

    const [label, ref] = rawLabel.split("#");
    const filePath = resolveExamplePath(file, label);
    if (!filePath) {
      file.fail(`Could not read example file: ${label}`);
      return;
    }

    const ext = extname(label);
    const lang = node.attributes?.lang || ext.slice(1);

    const raw = readFileSync(filePath, "utf-8");
    const content = ext === ".html" ? extractCodeRef(raw, filePath, file, ref) : raw;
    if (content == null) return;

    parent.children[index] = { type: "code", lang, value: content.trim() };
  });
};

const headingIds: RehypePlugin = () => (tree, file) => {
  if (!isInformativeFile(file)) return;

  // @ts-ignore(2554) - rehypeHeadingIds' typings require 3rd param, but it's unused
  rehypeHeadingIds({ experimentalHeadingIdCompat: true })!(tree, file);
};

export const remarkPlugins = [customDirectives, exampleCode];
export const rehypePlugins = [headingIds];
