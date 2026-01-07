---
status: developing
type: foundational
title: Text detectable
---

All visible text has a programmatically determinable equivalent.

:::except-when
* making visible text programmatically determinable would lead to duplication within the view.
:::

:::tests

<b>Procedure</b>
1. Identify all visible text. 
2. For text that is embedded in an image, check if text has a text alternative or can be accurately read using the accessibility support set.
3. For text content, check that the text is not hidden using code such as the `aria-hidden` attribute.

<b>Expected results</b>
* #2 is true.
* #3 is true.
:::
