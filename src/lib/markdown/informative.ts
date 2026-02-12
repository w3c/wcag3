import { rehypeHeadingIds, type RehypePlugin, type RemarkPlugin } from "@astrojs/markdown-remark";
import type { VFile } from "vfile";

import { informativeSlug } from "../constants";

export const isInformativeFile = (file: VFile) =>
  file.dirname?.startsWith(`${file.cwd}/${informativeSlug}`);

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

const headingIds: RehypePlugin = () => (tree, file) => {
  if (!isInformativeFile(file)) return;

  // @ts-ignore(2554) - rehypeHeadingIds' typings require 3rd param, but it's unused
  rehypeHeadingIds({ experimentalHeadingIdCompat: true })!(tree, file);
};

export const remarkPlugins = [customDirectives];
export const rehypePlugins = [headingIds];
