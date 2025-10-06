import type { RemarkPlugin } from "@astrojs/markdown-remark";

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
      } else if (isGuideline && node.name === "user-needs") {
        const type = getGuidelineFileType(file);
        if (type !== "guideline")
          file.fail(`user-needs expected at guideline level but found at ${type} level`);

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "user-needs" };
        node.children.unshift({
          type: "html",
          value: "<summary>User Needs</summary><p><em>This section is non-normative.</em></p>",
        });
      } else if (isGuideline && node.name === "tests") {
        const type = getGuidelineFileType(file);
        if (type !== "requirement")
          file.fail(`tests expected at requirement level but found at ${type} level`);

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "tests" };
        node.children.unshift({
          type: "html",
          value: "<summary>Tests</summary><p><em>This section is non-normative.</em></p>",
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
      } else file.fail(`Unrecognized container directive :::${node.name}`);
    } else if (node.type === "textDirective") {
      if (node.name === "term") {
        const data = node.data || (node.data = {});
        data.hName = "a";
      } else file.fail(`Unrecognized inline directive :${node.name}`);
    }
  });
};

export const guidelinesRemarkPlugins = [addEmptyTermNote, customDirectives];
export const guidelinesRehypePlugins = [];
