import { editableTypesSchema } from "@/lib/guidelines";
import { defineAction } from "astro:actions";
import { getEntry } from "astro:content";
import { z } from "astro:schema";
import { writeFile } from "fs/promises";

export const server = {
  edit: defineAction({
    accept: "form",
    input: z.object({
      content: z.string(),
      id: z.string(),
      type: editableTypesSchema,
    }),
    handler: async (input) => {
      const entry = await getEntry(input.type, input.id);
      if (!entry?.filePath) throw new Error("Entry not found");
      await writeFile(entry.filePath, input.content);
      return {};
    }
  })
}
