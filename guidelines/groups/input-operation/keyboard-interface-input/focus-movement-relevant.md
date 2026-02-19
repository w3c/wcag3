---
status: developing
type: supplemental
---

Except for skip links and other elements that are hidden but specifically added to aid keyboard navigation, tabbing does not move the :term[keyboard focus] onto :term[content] that was not visible before the tab action.

:::note
Accordions, dropdown menus, and [ARIA tab panels](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) are examples of expandable content. According to this :term[requirement], these would not expand simply because they include an element in the tab-order contained in them. They would either not expand or would not have any tab-order elements in them.
:::

:::example
A menu that expands when you tab to it, but then uses arrow keys to navigate in it would pass. But a menu that expands and then requires you to tab through all the newly-visible elements to navigate past it would fail.
:::

:::tests
**Procedure**

For any interactive element:
1. Check that keyboard focus does not disappear into content that is not visible.
2. Check that hidden element does not automatically expand (become visible) when the keyboard focus is on it (unless it is a visually hidden element specifically added to aid keyboard navigation) (e.g. skip to main content).

**Expected results**
- #1 and #2 are true.
:::