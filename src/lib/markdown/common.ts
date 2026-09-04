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
  const content = "" + file.value;
  const lines = content.split(/\r?\n/);
  const blockDirectiveStartCount = lines.reduce(
    (total, line) => (/^:{3,}\S+/.test(line) ? total + 1 : total),
    0
  );
  const blockDirectiveEndCount = lines.reduce(
    (total, line) => (/^:{3,}$/.test(line) ? total + 1 : total),
    0
  );
  if (blockDirectiveStartCount !== blockDirectiveEndCount) file.fail(`Make sure each block directive has a matching end marker (:::)`);

  const textDirectivePattern = /(\w+):(\[[^\]]+\])/.exec(content);
  if (textDirectivePattern) {
    file.fail(
      `This looks like a mistyped text directive: ${textDirectivePattern[0]} → :${textDirectivePattern[1]}${textDirectivePattern[2]}`
    );
  }

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

    if (node.type === "paragraph") {
      const firstChild = node.children[0];
      if (firstChild.type === "text" && firstChild.value.startsWith(":::"))
        file.fail(
          `Invalid block directive marker (content should start on a new line): ${firstChild.value}`
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
