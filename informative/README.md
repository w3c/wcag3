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

#### Working examples

Static working example files live in `public/` under the equivalent path plus
the entry name, e.g. `public/informative/act-rules/web/{basename}/examples/` for
`informative/act-rules/web/{basename}.md`.

Code blocks can be extracted from the working examples and inserted into
`{basename}.md` content using the `::example-code` leaf directive, e.g.
`::example-code[{example-name}/index.html]`:

- The path is relative to the entry's `examples` directory in `public/`
- `.html` files extract only part of the file:
  - The contents of the element with a `data-code-ref` attribute,
    or `<body>` otherwise
  - If multiple `data-code-ref` elements exist, select one by `id` via `#{id}`,
    e.g. `::example-code[{example-name}/index.html#markup]`
- Other file types are extracted in full
- Syntax highlighting follows the file extension; override via `{lang=...}`,
  e.g. `::example-code[{example-name}/index.html#styles]{lang=css}`

Usage of this directive is encouraged where feasible in order to
reuse code rather than repeat it, but it is not required in all cases.
Fenced code blocks are appropriate for cases that do not warrant a full
working example, or where manually picking out a small subset of its code
would be more expedient.
