---
status: developing
type: foundational
---

If :term[content] interferes with pointer or :term[keyboard focus] behavior of the :term[user agent], then selecting anything on the :term[view] with a :term[pointer] moves the keyboard focus to that :term[interactive element], even if the user drags off the element (so as to not activate it).

:::example
A user scrolls a document down six screens, then clicks on a paragraph with their :term[pointer]. The user then presses the <kbd>Tab</kbd> key, which moves the focus to the first interactive :term[component] after the position on the screen that was clicked, rather than from the previous position, six screens up the document.
:::