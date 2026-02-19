---
status: developing
type: foundational
---

Pointer selection of elements moves the :term[keyboard focus] to that element, even if the user selects an :term[interactive element] and drags away from the element without activation.

:::applies-when
- Content can interfere with pointer or keyboard focus behavior.
:::

:::example
A user scrolls a document down six screens, then clicks on a paragraph with their pointer. The user then presses the <kbd>Tab</kbd> key, which moves the focus to the first interactive :term[component] after the position on the screen that was clicked, rather than from the previous position, six screens up the document.
:::

:::tests
**Procedure**

For every interactive element that allows pointer selection (including click events on non-interactive elements):
1. Check that the keyboard focus moves when the pointer selects the element.

**Expected results**

- #1 is true.
:::