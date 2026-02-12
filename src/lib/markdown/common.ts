import type { RemarkPlugin } from "@astrojs/markdown-remark";
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

export const remarkPlugins = [customDirectives];
export const rehypePlugins = [];
