---
type: supplemental
status: developing
---

All content fits within 320 :term[CSS pixels] in the default orientation of text without requiring scrolling in more than one direction. Sections of content within the :term[page]/:term[view] that scroll in a different direction to the page/view fit within 320 CSS pixels of the page-scrolling direction.

:::except-when
* 2D relationships. For example, tables, electronic program guides.
* Canvases of presentational content. For example, slides.
* Multiple palettes or panels that act on content. For example, Photoshop, IDE.
:::

:::ednote
All block-level elements fit within a 320px inline-size without requiring scrolling in more than one direction.
:::

:::tests
<b>Procedure</b>
1. Set the viewport at 320px in the direction of text.
2. Check that each section of content fits within 320 CSS pixels.

<b>Expected results</b>
* #2 is true.
:::
