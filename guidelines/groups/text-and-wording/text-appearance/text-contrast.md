---
needsAdditionalResearch: true 
status: developing
type: foundational
title: Text contrast (minimum)
---

The default visual presentation of text meets @@[X contrast measure, to be determined].

:::applies-when
* text is presented, including text embedded in an image format.
:::

:::except-when
the text is:

* also present elsewhere in the page/view which meets the requirement,
* part of an inactive Interactive element, 
* pure decoration, 
* not visible to anyone,
* part of a picture that includes significant other visual content,
* part of a logo or brand name.
:::

:::note
Transparency can cause testing issues, but should be tested as the rendered color.
:::

:::ednote
The contrast algorithm used in WCAG 3 is yet to be determined. For this draft, the requirement assumes the algorithm will include a size/weight factor. If the algorithm does not include size/weight, it will need to be added to this requirement text.

A separate requirement may be needed if red/green color vision deficiency (CVD) is not accounted for within the contrast algorithm.

For this foundational level requirement, the default minimum contrast level should be roughly equivalent to the WCAG2 4.5:1 level for small/body text.
:::

:::tests
<b>Procedure</b>

For each foreground and background combination of text:
1. Identify the foreground color.
2. Identify the background color.
3. Check the contrast of text meets the [TBD algorithm].

<b>Expected results</b>
* #3 is true
:::

