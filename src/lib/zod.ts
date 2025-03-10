import type { ZodObject, ZodRawShape } from "astro/zod";
import { render, type AnyEntryMap } from "astro:content";

/**
 * Renders a collection entry, with remarkPluginFrontmatter
 * validated/typed against an additional Zod schema.
 */
export async function renderAndValidate<C extends keyof AnyEntryMap, T extends ZodRawShape>(
  entry: AnyEntryMap[C][string],
  schema: ZodObject<T>
) {
  const result = await render(entry);
  return {
    ...result,
    remarkPluginFrontmatter: schema.parse(result.remarkPluginFrontmatter),
  };
}
