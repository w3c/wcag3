import type { RehypePlugin, RemarkPlugin } from "@astrojs/markdown-remark";

import * as common from "./common";
import * as guidelines from "./guidelines";
import * as informative from "./informative";

export const remarkPlugins: RemarkPlugin[] = [];
export const rehypePlugins: RehypePlugin[] = [];

// Push common plugins last, so that other plugins can rely on common directives
for (const module of [guidelines, informative, common]) {
  remarkPlugins.push(...module.remarkPlugins);
  rehypePlugins.push(...module.rehypePlugins);
}
