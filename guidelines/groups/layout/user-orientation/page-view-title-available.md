---
title: Page/view title available
type: foundational
status: developing
---

:term[Pages]/:term[views] have a title that describes the name, topic or purpose.
The :term[page]/:term[view] has a title that describes its name, topic or purpose.
Except when: The technology has no way to include a title.


:::except-when
- The technology has no way to include a title.
:::

:::tests
<b>Procedure: Ensure the page/view title is meaningful</b>

For each page/view:
1. Examine the source code of the HTML document and check that the first `title` element is not-empty.
2. Check that the title element describes the document.

<b>Expected results</b>
* #1 and #2 are true.

<b>Procedure: Verify that the page/view has no available mechanism to define a title</b>

For each page/view where no title element is present:
1. Determine whether the current page/view allows setting the HTML document `title` element.
2. If the page/view is rendered within the current document context (e.g. modal dialog, popup, etc.) and does not provide a mechanism to set a document-level `title`, the exception applies.

<b>Expected results</b>
* #1 and #2 are true.
:::
