import type { RehypePlugin, RemarkPlugin } from "@astrojs/markdown-remark";
import type { RootContent } from "hast";

import { toHtml } from "hast-util-to-html";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

const groupsPath = `guidelines/groups`;
const isGuidelineFile = (file: VFile) => file.dirname?.startsWith(`${file.cwd}/${groupsPath}`);

function getGuidelineFileType(file: VFile) {
  if (!isGuidelineFile(file)) return null;
  const remainingPath = file.dirname!.replace(`${file.cwd}/${groupsPath}/`, "");
  const segments = remainingPath?.split("/");
  if (segments.length === 0) return "group";
  if (segments.length === 1) return "guideline";
  if (segments.length === 2) return "requirement";
  return null;
}

const isTermFile = (file: VFile) => file.dirname?.startsWith(`${file.cwd}/guidelines/terms`);

const getFrontmatter = (file: VFile) => file.data.astro!.frontmatter!;

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

const customDirectives: RemarkPlugin = () => (tree, file) => {
  const isGuideline = isGuidelineFile(file);
  const isTerm = isTermFile(file);
  if (!isGuideline && !isTerm) return;

  visit(tree, (node) => {
    if (node.type === "containerDirective") {
      if (isGuideline && node.name === "decision-tree") {
        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "decision-tree" };
        // Prepend summary to existing children (setting hChildren would clear them)
        node.children.unshift({
          type: "html",
          value: "<summary>Which foundational requirements apply?</summary>",
        });
      } else if (node.name === "ednote") {
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = { class: "ednote" };
      } else if (node.name === "example") {
        const data = node.data || (node.data = {});
        data.hName = "aside";
        data.hProperties = { class: "example" };
      } else if (node.name === "note") {
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = { class: "note" };
      }
    } else if (node.type === "textDirective") {
      if (node.name === "term") {
        const data = node.data || (node.data = {});
        data.hName = "a";
      }
    }
  });
};

/** Extracts leading paragraphs/lists' HTML to a separate value. */
const extractLeadingContent: RehypePlugin = () => (tree, file) => {
  if (!isGuidelineFile(file)) return;
  const contentTags = ["p", "ul", "ol"];
  const leadingElements: RootContent[] = [];
  const textClass = `${getGuidelineFileType(file)}-text`;

  for (
    let child = tree.children[0];
    child?.type === "text" || (child?.type === "element" && contentTags.includes(child.tagName));
    tree.children.shift() && (child = tree.children[0])
  ) {
    if (child.type === "element") {
      const existingClass = child.properties.class;
      if (existingClass) child.properties.class += ` ${textClass}`;
      else child.properties.class = textClass;
    }
    leadingElements.push(child);
  }
  if (!leadingElements.length) file.fail("Leading content expected but not found.");

  const html = toHtml(leadingElements, {
    allowDangerousCharacters: true,
    allowDangerousHtml: true,
  });
  getFrontmatter(file).description = html;
};

export const guidelinesRemarkPlugins = [addEmptyTermNote, customDirectives];
export const guidelinesRehypePlugins = [extractLeadingContent];
