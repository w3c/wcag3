---
status: developing
type: foundational
---

Except for skip links and other elements that are hidden but specifically added to aid keyboard navigation, tabbing does not move the keyboard focus into content that was not visible before the <kbd>Tab</kbd> (or <kbd><kbd>Shift</kbd> + <kbd>Tab</kbd></kbd>) key was entered.

:::note
Accordions, dropdown menus, and [ARIA tab panels](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) are examples of expandable content. According to this requirement, these would not expand simply because they include an element in the tab-order contained in them. They would either not expand or would not have any tab-order elements in them.
:::

:::note
For example, a menu that expands when you tab to it, but then uses arrow keys to navigate in it would pass. But a menu that expands and then requires you to tab through all the newly-visible elements to navigate past it would fail.
:::
