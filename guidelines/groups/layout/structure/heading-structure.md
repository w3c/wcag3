---
title: Heading structure
type: foundational
status: developing
---

:term[Meaningful blocks of content] are organized with a logical hierarchy of headings.

:::except-when
* The technology does not support heading levels.
:::

:::ednote
Method(s) to be written
* Best practice: For each page or view, include an `H1` heading that makes clear the purpose of the page or view. This is addition to the `title` element, which can be hard to read. 
:::

:::tests
<i>Headings set at right level</i>

<b>Procedure</b>
1. Review the hierarchy of headings.
2. Headings for sibling content blocks have the same heading level.
3. Headings for immediate child content blocks should be at most one level higher than parent content blocks.

<b>Expected Results</b>
* #2 and #3 are true


<i>HTML Heading levels not skipped</i>

<b>Procedure</b>
1. Review the hierarchy of headings.
2. Each heading level should be at most one numerical level higher than the preceding heading.

<b>Expected Results</b>
* #2 is true
:::