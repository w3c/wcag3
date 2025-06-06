---
status: exploratory
type: foundational
---

If content takes keyboard focus behavior away from the :term[user agent], then selecting anything on the :term[view] with a :term[pointer] sets the keyboard focus to that element even if the user drags off the element so as to not activate it.

:::note
An example of this is: a user scrolls a document down six screens, then clicks on a paragraph with their :term[pointer]. The user then presses the <kbd>tab</kbd> key, which moves the focus to the first interactive component after the position on the screen that was clicked, rather than from the previous position, six screens up the document.
:::