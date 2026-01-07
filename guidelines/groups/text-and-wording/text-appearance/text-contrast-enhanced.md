---
needsAdditionalResearch: true 
status: developing
type: supplemental
title: Text contrast (enhanced)
---

The default visual presentation of text meets @@[X contrast measure, at a higher level than the foundational requirement for Text contrast (minimum)].

:::ednote
The contrast algorithm used in WCAG 3 is yet to be determined. For this draft, the requirement assumes the algorithm will include a size/weight factor. If the algorithm does not include size/weight, it will need to be added to this requirement text.

For this supplemental level requirement, the default minimum contrast level should be roughly equivalent to the WCAG2 7:1 level for small/body text.
:::

:::applies-when
* text is presented, including text embedded in an image format.
:::

:::except-when the text is:
* also present elsewhere in the page/view which meets the requirement,
* part of an inactive Interactive element, 
* pure decoration, 
* not visible to anyone,
* part of a picture that contains significant other visual content,
* part of a logo.
:::

:::tests
<b>Procedure</b>

For each foreground and background combination of text:
1. Identify the foreground color.
2. Identify the background color.
3. Check the contrast of text meets the [TBC algorithm].

<b>Expected results</b>
* #3 is true.
:::
