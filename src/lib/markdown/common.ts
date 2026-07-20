import type { RehypePlugin, RemarkPlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";

const customDirectives: RemarkPlugin = () => (tree) => {
  visit(tree, (node, index, parent) => {
    if (node.type === "containerDirective") {
      if (node.name === "comment" && parent && typeof index !== "undefined") {
        parent.children.splice(index, 1);
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
      // Translate :term[...] to <a>...</a>;
      // this is directly handled by ReSpec for normative documents,
      // and will be handled by middleware for informative documents.
      if (node.name === "term") {
        const data = node.data || (node.data = {});
        data.hName = "a";
      }
    }
  });
};

const directivePrefixMap = {
  containerDirective: ":::",
  leafDirective: "::",
  textDirective: ":",
} as const;

const checkDirectives: RemarkPlugin = () => (tree, file) => {
  visit(tree, (node) => {
    if (
      (node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective") &&
      !node.data
    ) {
      file.fail(
        `Unrecognized ${node.type.replace(/D/, " d")} ${directivePrefixMap[node.type]}${node.name}`
      );
    }
  });
};

/**
 * Removes tabindex added by Shiki by default.
 * Shiki's API exposes a way to avoid adding it,
 * but Astro does not expose the way it calls the API.
 */
const removeShikiTabindex: RehypePlugin = () => (tree) => {
  visit(tree, (node) => {
    if (node.type !== "element" || node.tagName !== "pre") return;
    const className = node.properties.class;
    if (
      typeof className === "string" &&
      className.startsWith("astro-code") &&
      "tabindex" in node.properties
    )
      delete node.properties.tabindex;
  });
};

export const remarkPlugins = [customDirectives, checkDirectives];
export const rehypePlugins = [removeShikiTabindex];
