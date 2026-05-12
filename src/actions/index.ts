/** @file Server actions, only used in dev mode */

import { exec } from "child_process";
import { readFile, rename, writeFile } from "fs/promises";
import { extname, join } from "path";
import { EOL } from "os";
import { promisify } from "util";

import { parseFrontmatter } from "@astrojs/markdown-remark";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import detectEOL from "detect-eol";
import yaml from "js-yaml";

import { convertIdToSlug, convertIdToTitle } from "@/lib/common";
import { devManageableCollections } from "@/lib/dev";
import { computeGuidelineTitle, type EntryWithTitle } from "@/lib/guidelines";
import {
  informativeProvisionSlugRelationMap,
  informativeRelatedTypes,
  type InformativeRelatedCollection,
} from "@/lib/informative";

const execAsync = promisify(exec);

/** Stages file(s) in git. */
const stageFiles = (...filenames: string[]) => execAsync(`git add ${filenames.join(" ")}`);

async function renameAndStage(source: string, destination: string) {
  // Use fs rename first as a means of validating up-front before changing git state
  await rename(source, destination);
  await stageFiles(source, destination);
}

async function writeAndStage(path: string, content: string) {
  await writeFile(path, content);
  await stageFiles(path);
}

/** Preserves existing line break type, to attempt to honor git/editor config. */
const replaceEol = (content: string, eolReference: string) =>
  content.replace(/\r?\n/g, detectEOL(eolReference, { fallback: EOL }));

/** Updates a JSON file with the result of running the parsed data through a transform function. */
async function updateJson<K extends CollectionKey>(
  path: string,
  update: (data: CollectionEntry<K>["data"]) => CollectionEntry<K>["data"]
) {
  const currentJson = await readFile(path, "utf8");
  const currentData = JSON.parse(currentJson) as K;
  const updatedData = update(currentData);
  await writeAndStage(
    path,
    replaceEol(JSON.stringify(updatedData, null, "  ") + "\n", currentJson)
  );
}

/** Modifies a Markdown file's frontmatter by running its data through the given function. */
async function updateYamlFrontmatter<K extends CollectionKey>(
  path: string,
  update: (data: CollectionEntry<K>["data"]) => CollectionEntry<K>["data"]
) {
  const { content, frontmatter, rawFrontmatter } = parseFrontmatter(
    await readFile(path, "utf8"),
    { frontmatter: "preserve" }
  );
  const updatedYaml = yaml.dump(update(frontmatter as K), {
    lineWidth: -1,
    quotingType: '"',
  });
  await writeAndStage(
    path,
    content.replace(`---${rawFrontmatter}---`, replaceEol(`---\n${updatedYaml}---`, content))
  );
}

export const server = {
  rename: defineAction({
    accept: "form",
    input: z.strictObject({
      collection: z.enum(devManageableCollections),
      id: z.string(),
      name: z
        .string()
        .regex(/^[a-z-]+$/, "name must only consist of lowercase letters and hyphens")
        .trim(),
      title: z
        .string()
        .regex(
          /^[A-Z].+/,
          "title must begin with a capital letter, and subsequent words should not be capitalized other than proper nouns or acronyms"
        )
        .trim()
        .optional(),
    }),
    handler: async ({ collection, id, name, title }) => {
      const entry = await getEntry(collection, id);
      if (!entry)
        throw new ActionError({
          message: `Could not resolve ${id} to a ${collection} entry`,
          code: "NOT_FOUND",
        });
      if (await getEntry(collection, id.replace(/[^\/]+$/, name))) {
        throw new ActionError({
          message: "Could not rename because destination name already exists",
          code: "CONFLICT",
        });
      }

      const shouldSetTitle = !!title && title !== convertIdToTitle(name, { capitalize: true });
      function setOrUnsetTitle<T extends EntryWithTitle["data"]>(entryData: T) {
        const updatedEntry = { ...entryData };
        if (shouldSetTitle) updatedEntry.title = title;
        else delete updatedEntry.title;
        return updatedEntry;
      }

      /** Path upon which most normative collections (and their entry IDs) are based */
      const normativeBase = join("guidelines", "groups");
      /** Path upon which informative collections (and their entry IDs) are based */
      const informativeGuidelinesBase = join("informative", "guidelines");

      // Edits (performed before renames so that id can be reused for file path)

      if (collection === "groups") {
        // Update child reference in groups.json
        await updateJson(join(normativeBase, "..", "groups.json"), (groups: string[]) =>
          groups.map((groupId) => (groupId === id ? name : groupId))
        );
        // Update title in groups/{group}.json if it has changed
        if (entry.data.title !== (shouldSetTitle ? title : undefined)) {
          await updateJson<"groups">(join(normativeBase, `${id}.json`), setOrUnsetTitle);
        }
      } else if (collection === "guidelines") {
        const slug = convertIdToSlug(id);
        // Update child reference in groups/{group}.json
        await updateJson<"groups">(
          join(normativeBase, `${id.slice(0, id.indexOf("/"))}.json`),
          (data) => ({
            ...data,
            children: data.children.map((guidelineSlug) =>
              guidelineSlug === slug ? name : guidelineSlug
            ),
          })
        );
        // Update title in groups/{group}/{guideline}.md if it has changed
        if (entry.data.title !== (shouldSetTitle ? title : undefined)) {
          await updateYamlFrontmatter<"guidelines">(
            join(normativeBase, `${id}.md`),
            setOrUnsetTitle
          );
        }
      } else {
        const slug = convertIdToSlug(id);
        // Update child reference in groups/{group}/{guideline}.md
        await updateYamlFrontmatter<"guidelines">(
          join(normativeBase, `${id.slice(0, id.lastIndexOf("/"))}.md`),
          (data) => ({
            ...data,
            children: data.children.map((provisionSlug) =>
              provisionSlug === slug ? name : provisionSlug
            ),
          })
        );
        // Update title and issueLabel in groups/{group}/{guideline}/{provision}.md if applicable
        await updateYamlFrontmatter<"requirements">(join(normativeBase, `${id}.md`), (data) => {
          const updatedData = setOrUnsetTitle(data);
          if (!updatedData.issueLabel) updatedData.issueLabel = computeGuidelineTitle(entry);
          return updatedData;
        });

        // Update slug references in other informative docs (if any)
        const relatedInformativeEntries = informativeProvisionSlugRelationMap[slug];
        if (relatedInformativeEntries) {
          for (const [relatedCollection, relatedEntries] of Object.entries(
            relatedInformativeEntries
          )) {
            for (const relatedEntry of relatedEntries) {
              await updateYamlFrontmatter<InformativeRelatedCollection>(
                `${join(
                  informativeGuidelinesBase,
                  "..",
                  informativeRelatedTypes[relatedCollection as InformativeRelatedCollection].slug,
                  ...relatedEntry.id.split("/")
                )}.md`,
                (data) => ({
                  ...data,
                  provisions: data.provisions.map((provisionSlug) =>
                    provisionSlug === slug ? name : provisionSlug
                  ),
                })
              );
            }
          }
        }
      }

      // Renames

      if (collection === "groups") {
        // Group file
        await renameAndStage(
          join(normativeBase, `${id}.json`),
          join(normativeBase, `${name}.json`)
        );
        // Folder containing guidelines
        await renameAndStage(join(normativeBase, `${id}`), join(normativeBase, `${name}`));
        // Folder containing informative docs
        await renameAndStage(
          join(informativeGuidelinesBase, `${id}`),
          join(informativeGuidelinesBase, `${name}`)
        );
      } else {
        // Both guidelines and provisions have md files; only guidelines have a subfolder
        const paths = [`${id}.md`];
        if (collection === "guidelines") paths.push(id);
        for (const parts of paths.map((path) => path.split("/"))) {
          // Normative
          await renameAndStage(
            join(normativeBase, ...parts),
            join(
              normativeBase,
              ...parts.map((part, i) => (i < parts.length - 1 ? part : `${name}${extname(part)}`))
            )
          );
          // Informative
          await renameAndStage(
            join(informativeGuidelinesBase, ...parts),
            join(
              informativeGuidelinesBase,
              ...parts.map((part, i) => (i < parts.length - 1 ? part : `${name}${extname(part)}`))
            )
          );
        }
      }

      return { name };
    },
  }),
};
