---
title: Page/view title available
type: foundational
status: developing
---

:term[Pages]/:term[views] have a title that describes the name, topic or purpose.

:::except-when
- The presented content has no way to include a title.
:::

:::tests
<b>Procedure</b>

For each page/view:
1. Examine the source code of the HTML document and check that the first `title` element is not-empty.
2. Check that the title element describes the document.

<b>Expected results</b>
* #1 and #2 are true.
:::
