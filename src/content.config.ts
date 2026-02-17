import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import uniq from "lodash-es/uniq";

/** howto can be set to true to indicate the informative and normative slugs are identical */
const howtoSchema = z.boolean().or(z.string().regex(/^[\w-]+$/));
const statusSchema = z.enum(["placeholder", "exploratory", "developing", "refining", "mature"]);
const parentStatusSchema = statusSchema.exclude(["placeholder", "exploratory"]);

/** Contains fields common between guidelines and requirements */
const commonChildSchema = z.object({
  howto: howtoSchema.optional(),
  title: z.string().optional(),
});

const stringArrayParser = (fileContent: string) =>
  JSON.parse(fileContent).map((id: string) => ({ id }));

const childrenSchema = z
  .array(z.string())
  .min(1)
  .refine((value) => uniq(value).length === value.length, {
    message: "children should not contain duplicates",
  });

export const collections = {
  acknowledgementsOrder: defineCollection({
    loader: file("./guidelines/acknowledgements/index.json", {
      parser: stringArrayParser,
    }),
  }),
  acknowledgements: defineCollection({
    loader: glob({ pattern: ["*.md*"], base: "./guidelines/acknowledgements" }),
  }),
  groupOrder: defineCollection({
    loader: file("./guidelines/groups/index.json", {
      parser: stringArrayParser,
    }),
    schema: z.object({
      // This _should_ be able to use reference("groups"),
      // but it's not finding some of them even when they exist?
      id: z.string(),
    }),
  }),
  groups: defineCollection({
    loader: glob({ pattern: "*.json", base: "./guidelines/groups", ignore: "index.json" }),
    schema: z.object({
      children: childrenSchema,
      status: parentStatusSchema.optional(),
      title: z.string().optional(),
    }),
  }),
  guidelines: defineCollection({
    loader: glob({ pattern: "*/*.md", base: "./guidelines/groups" }),
    schema: commonChildSchema.extend({
      // Note: can't use references for children while relying on default ids,
      // since auto-generated ids include every * segment rather than only the last.
      // Moreover, we can't override generateId for requirements to only use slug,
      // due to duplicates across separate guidelines, e.g. "style-guide"
      children: childrenSchema,
      issueLabel: z.string().optional(),
      status: parentStatusSchema.optional(),
    }),
  }),
  requirements: defineCollection({
    loader: glob({ pattern: "*/*/*.md", base: "./guidelines/groups" }),
    schema: commonChildSchema.extend({
      tags: z.array(reference("tags")).optional(),
      issueLabel: z.string().optional(),
      needsAdditionalResearch: z.boolean().optional(),
      status: statusSchema.default("exploratory"),
      type: z
        .enum([
          "foundational",
          "supplemental",
          "assertion",
          "best practice",
        ])
        .optional(),
    }),
  }),
  tags: defineCollection({
    loader: file("./guidelines/tags.json", {
      parser: stringArrayParser,
    }),
  }),
  terms: defineCollection({
    loader: glob({ pattern: "*.md", base: "./guidelines/terms" }),
    schema: commonChildSchema.omit({ howto: true }).extend({
      status: statusSchema.optional(),
      synonyms: z.array(z.string()).min(1).optional(),
      unusedDefinition: z.boolean().optional(),
    }),
  }),
};
