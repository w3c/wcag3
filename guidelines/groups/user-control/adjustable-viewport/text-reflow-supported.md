---
type: supplemental
status: developing
---

:term[Blocks of text] are legible at 320 :term[CSS pixels] in the orientation of text, without the need to scroll in the orientation of text.

:::except-when
* The meaning of text relies on a two dimensional structure. For example, preformatted text such as code, poems, maps, or comics.
:::

:::ednote
Other languages may have other rules around line breaking: https://r12a.github.io/scripts/script-features/index.html
:::

:::tests
<i>HTML paragraph reflow without requiring scrolling in two dimensions</i>

<b>Procedure</b>

For each page/view:
1. Set the viewport at 320 CSS pixels in the direction of text.
2. Identify all the blocks of text within the scope.
3. Check that each block of text does not require scrolling into two dimensions.
4. Check that the text in each block of text is legible.


<b>Expected results</b>
* #3 and #4 are true.
:::
