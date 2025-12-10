---
title: Clear blocks of content
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

<b>Expected Results</b>
* #3 is true


<i>Programmatically identifiable meaningful blocks of content</i>

<b>Procedure</b>
1. Identify meaningful blocks of content in the page/view.
2. Examine the source code to validate that an appropriate role is being used for the meaningful blocks of content.
2. Use assistive technology to validate that an appropriate role is being used for the meaningful blocks of content.

<b>Expected Results</b>
* #2 or #3 is true


<i>Heading as a group</i>

<b>Procedure</b>
1. Review content and identify meaningful blocks of content.
2. Examine the source code to validate that an appropriate role is being used for the meaningful blocks of content.
3. Use assistive technology to validate that an appropriate role is being used for the meaningful blocks of content.

<b>Expected Results</b>
* #2 or #3 is true
:::