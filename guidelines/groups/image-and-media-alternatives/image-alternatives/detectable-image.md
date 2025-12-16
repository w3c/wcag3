---
status: developing
type: foundational
---

:term[Non-decorative images] are detectable

:::ednote
* Method: Examine the code and check if an image can be detected in a way that user agents and assistive technologies can identify it as an image.
* Can "non-decorative images" be defined as "Images that convey meaning"?
* For HTML, does using an img element meet this requirement?
:::

:::applies-when
When content includes :term[non-decorative images].
:::

:::tests
<b>Procedure</b>
1. For each image on a page, decide if the image is decorative or non-decorative
2. For each non-decorative image:
  * Check the code to see if it has been marked up in a way that makes it detectable; or
  * For technologies where the code cannot be checked, use a screen reader to test that the image is detectable.

<b>Expected results</b>
* #2a or #2b is true.
:::
