# WCAG 3 Informative Docs

This folder contains the source content files used to assemble the informative documentation.

## `informative` directory structure

### `guidelines/` subdirectory

This folder contains content files organized by guideline, then further by provision.
Filenames are expected to match those found under the top-level `guidelines` folder.

- `{group-name}/`
  - `{guideline-name}.md` - Defines informative content for each guideline
  - `{guideline-name}/` - Subdirectory containing provisions under each guideline
    - `{provision-name}.md` - Defines informative content for each provision

Note that information that is already defined in the `guidelines` folder,
such as `children` and `title`, is inherited and therefore not re-specified
inside the informative folder. (This is why there are no entries at the `{group-name}` level.)
As such, these files should not need to include any frontmatter.

Content files under this subdirectory can also make use of the [Custom Directives available to both Guidelines and Informative Docs](../README.md#custom-directives-available-to-both-guidelines-and-informative-docs).

### `act-rules/`, `best-practices/`, and `methods/` subdirectories

Each of these folders defines a specific type of supplementary content,
and follows the following structure:

- `{technology}/` - Where `{technology}` is one of `documents`, `mobile`, or `web`; in practice, only `web` has been used so far
  - `{technology}/{filename}.md` - Contains a single ACT rule / best practice / method:
    - `{filename}` should match what you would like the URL slug for this entry to look like
    - The actual title and related provisions will be defined in frontmatter (see below)

#### Supported Frontmatter Fields

The following fields are required:

- `title` - Title of the ACT rule, best practice, or method
- `provisions` - List of slugs corresponding to applicable provisions for this entry;
  this should _only_ specify the provision slug (not group or guideline),
  e.g. `sections-labeled` rather than `layout/structure/sections-labeled`
