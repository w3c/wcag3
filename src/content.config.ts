import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import uniq from "lodash/uniq";

const statusSchema = z.enum(["placeholder", "exploratory", "developing", "refining", "mature"]);
const parentStatusSchema = statusSchema.exclude(["placeholder", "exploratory"]);

const stringArrayParser = (fileContent: string) =>
  JSON.parse(fileContent).map((id: string) => ({ id }));

const childrenSchema = z
  .array(z.string())
  .min(1)
  .refine((value) => uniq(value).length === value.length, {
    message: "children should not contain duplicates",
  });

const relatedSchema = z.strictObject({
  /** Provision filename slugs (validated at runtime) */
  provisions: z.array(z.string()),
  title: z.string(),
});

/**
 * Matches informative directories except reserved top-level names belonging to other collections.
 */
const generateInformativePatternWithIgnores = (pattern: string) => [
  pattern,
  ...["act-rules", "best-practices", "methods"].map((dir) => pattern.replace(/^\*+/, `!${dir}`)),
];

export const collections = {
  // Content for normative WCAG 3 document

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
    schema: z.object({
      // Note: can't use references for children while relying on default ids,
      // since auto-generated ids include every * segment rather than only the last.
      // Moreover, we can't override generateId for requirements to only use slug,
      // due to duplicates across separate guidelines, e.g. "style-guide"
      children: childrenSchema,
      issueLabel: z.string().optional(),
      status: parentStatusSchema.optional(),
      title: z.string().optional(),
    }),
  }),
  requirements: defineCollection({
    loader: glob({ pattern: "*/*/*.md", base: "./guidelines/groups" }),
    schema: z.object({
      tags: z.array(reference("tags")).optional(),
      issueLabel: z.string().optional(),
      needsAdditionalResearch: z.boolean().optional(),
      status: statusSchema.default("exploratory"),
      title: z.string().optional(),
      type: z.enum(["foundational", "supplemental", "assertion", "best practice"]).optional(),
    }),
  }),
  tags: defineCollection({
    loader: file("./guidelines/tags.json", {
      parser: stringArrayParser,
    }),
  }),
  terms: defineCollection({
    loader: glob({ pattern: "*.md", base: "./guidelines/terms" }),
    schema: z.object({
      status: statusSchema.optional(),
      synonyms: z.array(z.string()).min(1).optional(),
      title: z.string().optional(),
      unusedDefinition: z.boolean().optional(),
    }),
  }),

  // Content for informative WCAG 3 docs

  informativeGuidelines: defineCollection({
    loader: glob({
      pattern: generateInformativePatternWithIgnores("*/*.md"),
      base: "./informative",
    }),
    schema: z.strictObject({}),
  }),
  informativeRequirements: defineCollection({
    loader: glob({
      pattern: generateInformativePatternWithIgnores("*/*/*.md"),
      base: "./informative",
    }),
    schema: z.strictObject({}),
  }),

  actRules: defineCollection({
    loader: glob({ pattern: "*/*.md", base: "./informative/act-rules" }),
    schema: relatedSchema,
  }),

  bestPractices: defineCollection({
    loader: glob({ pattern: "*/*.md", base: "./informative/best-practices" }),
    schema: relatedSchema,
  }),

  methods: defineCollection({
    loader: glob({ pattern: "*/*.md", base: "./informative/methods" }),
    schema: relatedSchema,
  }),
};
