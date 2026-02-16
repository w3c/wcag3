---
type: supplemental
status: developing
---

:term[Meaningful blocks of content] are organized with a logical hierarchy of headings.

:::except-when
* The technology does not support heading levels.
:::

:::tests
<i>Headings set at right level</i>

<b>Procedure</b>

For the hierarchy of headings:
1. Check that headings for sibling content blocks have the same heading level.
2. Check that headings for immediate child content blocks should be at most one level higher than parent content blocks.

<b>Expected results</b>
* #1 and #2 are true.


<i>HTML Heading levels not skipped</i>

<b>Procedure</b>

For each page/view:
1. Review the hierarchy of headings.
2. Each heading level should be at most one numerical level higher than the preceding heading.

<b>Expected results</b>
* #2 is true.
:::