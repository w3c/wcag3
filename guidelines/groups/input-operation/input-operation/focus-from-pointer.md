---
title: Focus from pointer
type: foundational
status: developing
---

Pointer selection of elements moves the keyboard focus to that element, even if the user selects an interactive element and drags away from the element without activation.

:::applicable-when
* Content can interfere with pointer or keyboard focus behavior.

:::example
A user scrolls a document down six screens, then clicks on a paragraph with their pointer. The user then presses the Tab key, which moves the focus to the first interactive component after the position on the screen that was clicked, rather than from the previous position, six screens up the document.
:::

:::ednote
Need to investigate the behavior in other contexts, e.g. touch-screen with bluetooth keyboard.

Methods & best practices 
* Mouse events are not added to non-interactive elements to prevent clicking for focus.
:::

:::tests
<b>Procedure</b>
1. Check for click events on non-interactive elements.

<b>Expected Results</b>
* #1 is true