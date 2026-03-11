---
type: foundational
status: developing
title: Non-text content not relied on
---

All :term[non-text content] that is not decorative includes a programmatically determinable equivalent text alternatives.

:::tests
<i>HTML alternative text for images</i>

<b>Procedure</b>

1. Examine the source code of the HTML document to identify all non-decorative `img` elements.
2. Each img element has an `alt` attribute.
3. The `alt` attribute provides a text alternative which conveys meaning or content that is displayed visually.
4. If the image includes words that are important to understanding the content, the words are included in the text alternative.

<b>Expected results</b>
* #2, #3 and #4 are true.

<i>(Mobile) Videos include accessible name</i>

<b>Procedure</b>

For each instance of non-text content:
1. Using native mobile screen reader to review all videos in the app.
2. When videos are navigated to an accessible name is read out.
3. The accessible name includes the title of the video.

<b>Expected results</b>
* #2 and #3 are true.
:::
