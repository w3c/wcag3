---
status: developing
type: foundational
---

All visible :term[text] has a :term[programmatically determinable] equivalent.

:::except-when
* making visible text programmatically determinable would lead to duplication within the view.
:::

:::tests

<b>Procedure</b>
For all visible text: 
2. If the text is embedded in an image, check that the text has a :term[text alternative] or can be accurately read using the :term[accessibility support set].
3. If text content, check that the text is not hidden using code such as the `aria-hidden` attribute.

<b>Expected results</b>
* #2 and #3 are true.
:::
