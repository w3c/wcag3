---
status: developing
type: foundational
---

Except for skip links and other elements that are hidden but specifically added to aid keyboard navigation, tabbing does not move the :term[keyboard focus] into :term[content] that was not visible before the tab action.

:::note
Accordions, dropdown menus, and [ARIA tab panels](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) are examples of expandable content. According to this :term[requirement], these would not expand simply because they include an element in the tab-order contained in them. They would either not expand or would not have any tab-order elements in them.
:::

:::example
A menu that expands when you tab to it, but then uses arrow keys to navigate in it would pass. But a menu that expands and then requires you to tab through all the newly-visible elements to navigate past it would fail.
:::

:::tests
**Procedure**
1. Navigate through the content using only the keyboard and  keyboard actions in the list of standard keyboard navigation techniques (or described on the page where it is required or on a page earlier in the process where it is required)
2. Check that hidden content does not automatically expand (become visible) when you move to any part of the page/view (unless it is a visually hidden element specifically added to aid keyboard navigation) (e.g. skip to main content)
3. Check that keyboard focus does not disappear into content that is not visible

**Expected Results**
- #1 and #2 are both true
:::