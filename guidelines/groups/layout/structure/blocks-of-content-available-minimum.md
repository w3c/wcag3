---
title: Blocks of content available (minimum)
type: foundational
status: developing
---

:term[Meaningful blocks of content] are programmatically determinable and visually presented with sufficient surrounding space.

:::tests
<i>HTML sufficient space</i>

<b>Procedure</b>

1. Identify meaningful blocks of content in the page/view that are not bounded by a visual border.
2. Examine the computed style to determine the total of margin, padding and border spacing.
3. The spacing between all adjacent meaningful blocks of content is sufficient.

<b>Expected results</b>
* #3 is true.


<i>Programmatically identifiable meaningful blocks of content</i>

<b>Procedure</b>

For each meaningful blocks of content in the page/view:
1. Check that an appropriate role is being used for the meaningful blocks of content in the source code.
2. Check using assistive technology that an appropriate role is being used for the meaningful blocks of content.

<b>Expected results</b>
* #1 or #2 is true.
:::