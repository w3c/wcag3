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

If you use [`fnm`](https://github.com/Schniz/fnm) or [`nvm`](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions,
you can switch to the recommended version by typing `fnm use` or `nvm use`
(with no additional arguments) while in the repository directory.

First, run `npm i` in the root directory of the repository to install dependencies.

## Common Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm start`               | Start local dev server at `localhost:4321`          |
| `npm run build`           | Build to `./dist/`                                  |
| `npm run check`           | Check for TypeScript errors                         |
| `npm run preview`         | Preview build locally at `localhost:4321`           |
| `npm run cspell`          | Check spelling (see words list in custom-words.txt) |

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
      - `{guideline-name}.md` - Defines content of guideline and order of its child provisions
      - `{guideline-name}/` - Subdirectory containing provisions (e.g. requirements/assertions) under each guideline
        - `{provision-name}.md` - Defines content of an individual requirement or assertion
  - `terms/` - Contents of terms defined in the Glossary

### Notable Subdirectories under `src`

- `src/lib/` - contains files that contribute to Astro build or template logic
  - `markdown/` - contains files implementing remark and rehype plugins, to transform output of
    Markdown files

## Editing the Guidelines

### Supported Fields

This section explains the fields available to frontmatter defined at the top of Markdown files
for guidelines, provisions, and terms, and within JSON files for groups.

For those unfamiliar with the term, frontmatter refers to YAML written at the top of a file,
surrounded on each side by a line consisting of 3 hyphens.

See existing files under the `guidelines` folder for examples.

#### Common Fields

These are available to multiple data types, as specified in each respective section below.

- `children` - A list containing every slug found under a parent entry's corresponding subdirectory,
  in the order they are intended to be listed in the document
- `howto` - *Deprecated* Optional boolean or string indicating the presence of a howto page
  for the given guideline or requirement
  - `true` indicates the slug to reach the howto is consistent with the folder and filename of the current file
  - A string value indicates an exact slug
  - *This should currently be avoided until the informative documentation is revisited*
- `issueLabel` - Optional string; specifies the issue label corresponding to a provision
  - This is only necessary when the label does not match the provision's title, e.g. if a provision is renamed after it was first published
  - Excludes the "P - " prefix
  - It may help to think of this as a "legacy title" field
- `status` - Optional string: one of the status indicators outlined in the Explainer (in lowercase)
- `title` - Optional title of the guideline, requirement, or term
  - If unspecified, this will be derived from the slug,
    capitalizing the first letter of the first word and replacing hyphens with spaces

#### Groups

Represents each third-level heading that multiple guidelines are grouped under.
Each group is defined in a JSON file, with its child guidelines located in a
subdirectory with the same name.

- Supports [common fields](#common-fields): `children`, `status`
  - `status` for groups is optional, limited to `developing`, `refining`, `mature`
- No additional unique fields

#### Guidelines

Represents each fourth-level heading that multiple provisions (requirements/assertions)
are listed under. Each guideline is defined in a Markdown file, with its child
provisions located in a subdirectory with the same name.

- Supports [common fields](#common-fields): `children`, `howto`, `issueLabel`, `status`, `title`
  - `status` for guidelines is optional, limited to `developing`, `refining`, `mature`
- No additional unique fields

#### Provisions

Represents each fifth-level heading specifying an individual requirement or assertion.

- Supports [common fields](#common-fields): `howto`, `issueLabel`, `status`, `title`
  - `status` for requirements and assertions defaults to `exploratory` if not specified
- `needsAdditionalResearch` - Optional boolean, indicating whether to
  display a "needs additional research" editor's note
- `tags` - Optional list of strings, referencing values in `guidelines/tags.json`
  - Make sure to surround these values in double-quotes to avoid YAML parsing errors
- `type` - Optional string: `foundational`, `supplemental`, `assertion`, or `best practice`
  - If not specified, the entry will be rendered as "Requirement"
    (with neither "Foundational" nor "Supplemental" qualification)

#### Terms

Represents each `dt`/`dd` pair appearing in the Glossary section.

- Supports common fields: `status`, `title` (these influence the content of the `dt` element)
- `synonyms` - Optional list of other words or phrases that can be used to reference this term
  - This does **not** need to include plurals where the final word ends in "s" or "es";
    this is automatically supported
- `unusedDefinition` - Boolean flag; if true,
  [suppresses ReSpec's unused definition warning](https://respec.org/docs/#lint-ignore) for this term

**Note:** If a term file is empty, a "to be defined" Editor's Note will be inserted.

### Additional Markdown features

#### Definition Lists

Definition lists can be specified directly in Markdown via the following format:

```
Term
:   Definition

Another term
:   Another definition

Shared term
Another shared term
:   Shared definition
:   Another shared definition
```

### Custom Directives for Guidelines Markdown

For more concrete examples, search for these directives in the repository.

#### Comments

Comment blocks will be excluded from output. They can be used e.g.
to document thought processes that led to how content was written.

```
:::comment
This will not be displayed.
:::
```

#### Decision Trees

The following block will be transformed into a decision tree `details` element,
with "Which core requirements apply" summary automatically included:

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

#### User Needs

The following block will be transformed into a User Needs `details` element,
with an indication that its content is non-normative.
This is _only_ valid within guidelines.

```
:::user-needs
Your content here
:::
```

#### Tests

The following block will be transformed into a Tests `details` element,
with an indication that its content is non-normative.
This is _only_ valid within requirements.

```
:::tests
Your content here
:::
```

#### Applies when

The following block will be preceded by "Applies when".
This is _only_ valid within requirements.

```
:::applies-when
a condition is true.
:::
```

The label, "Applies when", will be prepended to the first paragraph in the block. If the first content item is anything other than a paragraph (e.g. if the block only contains a list), it will appear in a separate paragraph before the content.

#### Except when

The following block will be preceded by "Except when".
This is _only_ valid within requirements.

```
:::except-when
a condition is true.
:::
```

This follows the same behavior as `:::applies-when` regarding single paragraphs vs. other cases.

#### Assertions replacements

The following leaf directives are to be used before required and recommended documentation to be included for assertions:

```
::assertion-required

- List item
- ...

::assertion-recommended

- List item
- ...
```

Note that these are leaf directives, not container directives, so there is no end marker.

#### Glossary Term References

The text inside `:term[...]` will be transformed into a link referencing a term in the glossary,
and can be used inline within blocks of text:

```
... is :term[programmatically determinable].
```

## Creating New Entries

General notes:

- All instructions/examples in this section operate within the `guidelines` folder
- File and folder names should be in [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) (all lowercase, hyphen-delimited)
- [See `title` under Common Fields](#common-fields) above regarding how
  entry names map to titles by default, and how to override with a custom title
- Remember to add appropriate frontmatter; see the subsection under
  [Supported Fields](#supported-fields) for the relevant entry type
- Other existing entries may be helpful to look at as examples, especially with
  regard to JSON or frontmatter syntax

### New Group

For illustrative purposes, this refers to the new group as `group-name`.

To create a new top-level group:

1. Under the `groups` folder, create a subfolder for the new group
   (e.g. `groups/group-name`)
1. Also under the `groups` folder (not the new subfolder),
   create a JSON file with the same basename as the new subfolder
   (e.g. `groups/group-name.json`), with the following content:
   ```json
   {
     "children": [
     ]
   }
   ```
1. Edit `index.json` (directory under the top-level `guidelines` folder)
   to add an entry in its `children` array for the new group
   (again using the same basename, e.g. `group-name`)
   - This is what makes the group appear in the document structure,
     and determines its order among the other top-level groups
1. Follow the instructions below to create at least one guideline
   within the group, and at least one requirement or assertion within
   each guideline

### New Guideline

For illustrative purposes, this refers to the existing parent group as `group-name`
and the new child guideline as `guideline-name`.

To create a new guideline:

1. Under the desired group's folder, create a subfolder for the guideline
   (e.g. `groups/group-name/guideline-name`)
1. Edit the JSON file for the group (e.g. `groups/group-name.json`)
   to add an entry in its `children` array for the new guideline
   (again using the same basename, e.g. `guideline-name`)
   - This is what makes the guideline appear in the document structure,
     and determines its order among the other guidelines under the same group
1. Also under the group's folder (not the new subfolder),
   create a Markdown file with the same basename as the new subfolder
   (e.g. `groups/group-name/guideline-name.md`)
   - To prevent the build from failing before any requirements or assertions are added,
     include the following initial content:
     ```
     ---
     children: []
     ---

     @@ add guideline text here

     ```
     We will expand `children` to a multi-line list when adding provisions.
     Note that including some content after the frontmatter is also necessary for the build to function.
1. Follow the instructions below to create at least one requirement
   or assertion within the guideline

### New Requirement or Assertion

For illustrative purposes, this refers to the existing parent guideline as `guideline-name`,
its parent group as `group-name`, and the new child requirement as `requirement-name`.

Note that the process is the same for requirements or assertions; the only difference is
the value of `type` in the entry's frontmatter
(see [Fields for Provisions](#provisions)).

1. Under the desired guideline's folder, create a Markdown file
   (e.g. `groups/group-name/guideline-name/requirement-name.md`)
1. Edit the Markdown file for the guideline (e.g. `groups/group-name/guideline-name.md`)
   to add an entry in its `children` array for the new guideline
   - This is what makes the requirement/assertion appear in the document structure,
     and determines its order among the other entries under the same guideline
   - Arrays in frontmatter can be expressed similarly to Markdown lists, e.g.:
   ```
   ---
   children:
     - requirement-name
   ---
   ```

### New Term

Creating a glossary term is more straightforward, since there is no hierarchy:
create a Markdown file under `terms`, then populate its content and any applicable
[frontmatter](#terms).

## Environment Variables

### `WCAG_DIFFABLE`

When set, filters build output to reduce noise when diffing output between changes.
This is for maintenance purposes only, to catch regressions;
built code is not expected to run properly when this is active!

**Default:** Unset (set to any non-empty value to enable)

### `WCAG_SKIP_WIP`

When set, excludes provisions that have `needsAdditionalResearch` set to `true`,
or that have `status` set to `placeholder` or `exploratory`.
