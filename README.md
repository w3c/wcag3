# wcag3
WCAG 3

There is a [presentation of the process the group](https://docs.google.com/presentation/d/14qG2f-ZkhFDqox_qmzqC5tCUt1xJaumkJS2l5GaD-3o/edit#slide=id.p) uses for addressing issues and updates.

## Editor's Draft

Editor's drafts of TR space documents are available at:

* [Guidelines](https://w3c.github.io/wcag3/guidelines/)
* [Explainer](https://w3c.github.io/wcag3/explainer/)
* [Requirements](https://w3c.github.io/wcag3/requirements/)

## Local Setup

Make sure you have [Node.js](https://nodejs.org/) installed. This has primarily been tested with v20.

If you use [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions,
you can switch to the recommended version by typing `fnm use` or `nvm use`
(with no additional arguments) while in the repository directory.

First, run `npm i` in the root directory of the repository to install dependencies.

## Common Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm start`               | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build to `./dist/`                               |
| `npm run check`           | Check for TypeScript errors                      |
| `npm run preview`         | Preview build locally at `localhost:4321`        |

## Project Structure

This repository uses Astro;
see [Astro's guide on project structure](https://docs.astro.build/en/basics/project-structure/)
for standard directories.

Additional directories with special meaning:

- `guidelines/` - contains content files which combine to form the normative document
  - `acknowledgements/` - Contents of Acknowledgement sections, one section per file
    - `index.json` - Defines order of Acknowledgements sections
  - `groups/` - Contents of grouping sections
    - `index.json` - Defines order of grouping sections
    - `{group-name}.json` - Defines order of underlying guideline sections; can specify status or title
    - `{group-name}/` - Contents of Guideline sections
      - `{guideline-name}.md` - Defines content of guideline and order of its requirements/assertions
      - `{guideline-name}/` - Subdirectory containing requirements/assertions under each guideline
        - `{requirement-or-assertion-name}.md` - Defines content of an individual requirement or assertion
  - `terms/` - Contents of terms defined in the Glossary

### Notable subdirectories under `src`

- `src/lib/` - contains files that contribute to Astro build or template logic
  - `markdown/` - contains files implementing remark and rehype plugins, to transform output of
    Markdown files

## Editing the Guidelines

### Supported fields

This section explains the fields available to frontmatter defined at the top of markdown files
for guidelines, requirements/assertions, and terms, and within JSON files for groups.

For those unfamiliar with the term, frontmatter refers to YAML written at the top of a file,
surrounded on each side by a line consisting of 3 hyphens.

See existing files under the `guidelines` folder for examples.

#### Common fields

These are available to multiple data types, as specified in each respective section below.

- `children` - A list containing every slug found under a parent entry's corresponding subdirectory,
  in the order they are intended to be listed in the document
- `howto` - Optional boolean or string indicating the presence of a howto page
  for the given guideline or requirement
  - `true` indicates the slug to reach the howto is consistent with the folder and filename of the current file
  - A string value indicates an exact slug
  - This is likely to change when the howto documentation is revisited
- `status` - Optional string: one of the status indicators outlined in the Explainer (in lowercase)
- `title` - Optional title of the guideline, requirement, or term
  - If unspecified, this will be derived from the slug,
    capitalizing the first letter of the first word and replacing hyphens with spaces

#### Groups

Represents each third-level heading that multiple guidelines are grouped under.
Each group is defined in a JSON file, with its child guidelines located in a
subdirectory with the same name.

- Supports common fields: `children`, `status`
- No additional unique fields

#### Guidelines

Represents each fourth-level heading that multiple requirements/assertions are
listed under. Each guideline is defined in a Markdown file, with its child
requirements/assertions located in a subdirectory with the same name.

- Supports common fields: `children`, `howto`, `status`, `title`
- No additional unique fields

#### Requirements and Assertions

Represents each fifth-level heading specifying an individual requirement or assertion.

- Supports common fields: `howto`, `status`, `title`
- `needsAdditionalResearch` - Optional boolean, indicating whether to
  display a "needs additional research" editor's note
- `type` - Optional string: `foundational`, `supplemental`, or `assertion`

#### Terms

Represents each `dt`/`dd` pair appearing in the Glossary section.

- Supports common fields: `status`, `title` (these influence the content of the `dt` element)
- `synonyms` - Optional list of other words or phrases that can be used to reference this term
  - This does **not** need to include plurals where the final word ends in "s" or "es";
    this is automatically supported

**Note:** If a term file is empty, a "to be defined" Editor's Note will be inserted.

### Custom directives for guidelines Markdown

For more concrete examples, search for these directives in the repository.

#### Decision trees

The following block will be transformed into a decision tree `details` element,
with "Which foundational requirements apply" summary automatically included:

```
:::decision-tree
For each item:
1. Would X do Y?
   - Yes, .... Stop.
   - No, fail.
1. Would A do Z?
   - ...
:::
```

#### Examples

The following block will be transformed into a yellow "Example" box:

```
:::example
Your content here
:::
```

#### Notes

The following block will be transformed into a green "Note" box:

```
:::note
Your content here
:::
```

#### Editor's notes

The following block will be transformed into a green "Editor's Note" box:

```
:::ednote
Your content here
:::
```

#### Glossary term references

The text inside `:term[...]` will be transformed into a link referencing a term in the glossary,
and can be used inline within blocks of text:

```
... is :term[programmatically determinable].
```

## Environment Variables

### `WCAG_DIFFABLE`

Filters build output to reduce noise when diffing output between changes.
This is for maintenance purposes only, to catch regressions;
built code is not expected to run properly when this is active!

**Default:** Unset (set to any non-empty value to enable)
