import type { RemarkPlugin } from "@astrojs/markdown-remark";
import type { ContainerDirective } from "mdast-util-directive";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

const groupsPath = `guidelines/groups`;
const isGuidelineFile = (file: VFile) => file.dirname?.startsWith(`${file.cwd}/${groupsPath}`);

type GuidelineFileType = "group" | "guideline" | "requirement";

function getGuidelineFileType(file: VFile): GuidelineFileType | null {
  if (!isGuidelineFile(file)) return null;
  const remainingPath = file.dirname!.replace(`${file.cwd}/${groupsPath}/`, "");
  const segments = remainingPath?.split("/");
  if (segments.length === 0) return "group";
  if (segments.length === 1) return "guideline";
  if (segments.length === 2) return "requirement";
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
    file.fail(`:::${directiveName} expected at ${expectedType} level but found at ${type} level`);
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

/**
 * Prepends a <strong> element containing the given label.
 * If the given node contains a single paragraph, it prepends inline;
 * otherwise, it prepends a preceding paragraph before the node.
 **/
function prependStrongText(node: ContainerDirective, label: string) {
  if (node.children.length === 1 && node.children[0].type === "paragraph") {
    node.children[0].children.unshift({
      type: "html",
      value: `<strong>${label}</strong> `,
    });
  } else {
    node.children.unshift({
      type: "html",
      value: `<p><strong>${label}</strong></p>`,
    });
  }
}

const customDirectives: RemarkPlugin = () => (tree, file) => {
  const isGuideline = isGuidelineFile(file);
  const isTerm = isTermFile(file);
  if (!isGuideline && !isTerm) return;

  const parentsWithApplicability = new Set();

  visit(tree, (node, index, parent) => {
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
        expectGuidelineFileType(file, "guideline", "user-needs");

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "user-needs" };
        node.children.unshift({
          type: "html",
          value: "<summary>User Needs</summary><p><em>This section is non-normative.</em></p>",
        });
      } else if (isGuideline && node.name === "tests") {
        expectGuidelineFileType(file, "requirement", "tests");

        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { class: "tests" };
        node.children.unshift({
          type: "html",
          value: "<summary>Tests</summary><p><em>This section is non-normative.</em></p>",
        });
      } else if (isGuideline && node.name === "applicability") {
        expectGuidelineFileType(file, "requirement", "applicability");

        prependStrongText(node, "Applies when:");
        node.children.push({
          type: "html",
          value: "<p><strong>Requirement:</strong></p>",
        });
        if (parent && typeof index !== "undefined") {
          parentsWithApplicability.add(parent);
          parent.children.splice(index!, 1, ...node.children);
        }
      } else if (isGuideline && node.name === "exceptions") {
        expectGuidelineFileType(file, "requirement", "exceptions");
        if (!parent || !parentsWithApplicability.has(parent))
          file.fail(":::exceptions cannot be used without :::applicability");

        prependStrongText(node, "Except when:");
        if (parent && typeof index !== "undefined")
          parent.children.splice(index!, 1, ...node.children);
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
