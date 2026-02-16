---
status: developing
type: foundational
---

All :term[content] that can be accessed by other input modalities can be accessed using :term[keyboard interface] only.

:::note
All content includes content made available via hovers, right clicks, etc.
:::

:::note
Other input modalities include :term[pointing devices], voice and speech recognition, :term[gesture], camera, and any other means of input or control.
:::

:::note
The ["Keyboard operable" requirement](#keyboard-operable) allows you to navigate to all actionable elements, but if the next element is 5 screens down, you also need to be able to access all the content. Also, if the content is in expanding :term[sections], you need to not only open them but also access all of the content, not just its actionable elements.
:::

:::tests
**Procedure**
For all content on the :term[page]/:term[view]:
1. Check that the content can be viewed using the keyboard and keyboard actions in the [Standard Keyboard Navigation &amp; Operation Keys and Techniques](https://github.com/w3c/wcag3/wiki/Standard-Keyboard-Navigation-&-Operation-Keys-and-Techniques);
2. Check that the content can be viewed using keyboard actions described on the page where it is required or on a page earlier in the process where it is required.

**Expected results**
- #1 or 2 is true.
:::

