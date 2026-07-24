import type { RemarkPlugin } from "@astrojs/markdown-remark";
import type { ContainerDirective } from "mdast-util-directive";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

import { join, sep } from "path";

const groupsPath = `guidelines/groups`;
const isGuidelineFile = (file: VFile) => file.dirname?.startsWith(join(file.cwd, groupsPath));

type GuidelineFileType = "group" | "guideline" | "provision";

function getGuidelineFileType(file: VFile): GuidelineFileType | null {
  if (!isGuidelineFile(file)) return null;
  const remainingPath = file.dirname!.replace(join(file.cwd, groupsPath) + sep, "");
  const segments = remainingPath?.split(sep);
  if (segments.length === 0) return "group";
  if (segments.length === 1) return "guideline";
  if (segments.length === 2) return "provision";
  return null;
}

/** Fails validation if the file passed is not at the expected hierarchy level. */
function expectGuidelineFileType(
  file: VFile,
  expectedType: GuidelineFileType,
  directiveName: string
) {
  const type = getGuidelineFileType(file);
  if (type !== expectedType)
    file.fail(`${directiveName} expected at ${expectedType} level but found at ${type} level`);
}

/** Fails validation if the given node does not exclusively contain an unordered list. */
function expectDirectiveWithUnorderedList(file: VFile, node: ContainerDirective) {
  if (node.children.length !== 1 || node.children[0].type !== "list" || node.children[0].ordered)
    file.fail(`${node.name} is expected to contain only an unordered list`);
}

const isTermFile = (file: VFile) => file.dirname?.startsWith(join(file.cwd, "guidelines", "terms"));

/** Adds standard editor's note to terms with empty content. */
const addEmptyTermNote: RemarkPlugin = () => (tree, file) => {
  if (isTermFile(file) && !tree.children.length) {
    tree.children.push({
      type: "containerDirective",
      name: "ednote",
      children: [
        {
          type: "paragraph",
          children: [{ type: "text", value: "To be defined." }],
        },
      ],
    });
  }
};

/**
 * Prepends a paragraph before the given node, containing the given text in bold (`<b>`).
 **/
function prependBoldText(node: ContainerDirective, label: string) {
  node.children.unshift({
    type: "html",
    value: `<p><b>${label}</b></p>`,
  });
}

const customDirectives: RemarkPlugin = () => (tree, file) => {
  const isGuideline = isGuidelineFile(file);
  const isTerm = isTermFile(file);
  if (!isGuideline && !isTerm) return;

  visit(tree, (node, index, parent) => {
    if (node.type === "containerDirective") {
      if (isGuideline && node.name === "decision-tree") {
        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "decision-tree" };
        // Prepend summary to existing children (setting hChildren would clear them)
        node.children.unshift({
          type: "html",
          value: "<summary>Which core requirements apply?</summary>",
        });
      } else if (isGuideline && node.name === "user-needs") {
        expectGuidelineFileType(file, "guideline", ":::user-needs");

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "user-needs" };
        node.children.unshift({
          type: "html",
          value: "<summary>User Needs</summary><p><em>This section is non-normative.</em></p>",
        });
      } else if (isGuideline && node.name === "tests") {
        expectGuidelineFileType(file, "provision", ":::tests");

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "tests" };
        node.children.unshift({
          type: "html",
          value: "<summary>Tests</summary><p><em>This section is non-normative.</em></p>",
        });
      } else if (isGuideline && node.name === "applies-when") {
        expectGuidelineFileType(file, "provision", ":::applies-when");
        expectDirectiveWithUnorderedList(file, node);

        prependBoldText(node, "Applies when");
        if (parent && typeof index !== "undefined") {
          parent.children = [
            // Place applies-when content first, then discard container node
            ...node.children,
            ...parent.children.slice(0, index),
            ...parent.children.slice(index + 1),
          ];
        }
      } else if (isGuideline && node.name === "except-when") {
        expectGuidelineFileType(file, "provision", ":::except-when");
        expectDirectiveWithUnorderedList(file, node);

        if (
          parent &&
          typeof index !== "undefined" &&
          parent.children
            .slice(index + 1)
            .some((node) => node.type === "containerDirective" && node.name === "applies-when")
        ) {
          file.fail(`:::applies-when must appear before :::except-when, not after`);
        }

        prependBoldText(node, "Except when");
        if (parent && typeof index !== "undefined")
          parent.children.splice(index, 1, ...node.children);
      }
    } else if (node.type === "leafDirective") {
      if (isGuideline && node.name === "assertion-required") {
        expectGuidelineFileType(file, "provision", "::assertion-required");
        const data = node.data || (node.data = {});
        data.hName = "p";
        data.hChildren = [
          {
            type: "text",
            value: "Information that needs to be included publicly:",
          },
        ];
      } else if (isGuideline && node.name === "assertion-recommended") {
        expectGuidelineFileType(file, "provision", "::assertion-recommended");
        const data = node.data || (node.data = {});
        data.hName = "p";
        data.hChildren = [
          {
            type: "text",
            value: "Recommended internal documentation (Informative):",
          },
        ];
      }
    }
  });
};

export const remarkPlugins = [addEmptyTermNote, customDirectives];
export const rehypePlugins = [];
