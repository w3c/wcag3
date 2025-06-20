---
status: exploratory
type: foundational
---

Except for skip links and other visually hidden elements specifically added to aid keyboard navigation, the keyboard focus order does not include non-interactive elements nor interactive elements in content that is currently visually hidden.

:::note
Accordions, dropdown menus, and ARIA tab panels are examples of expandable content. According to the requirement, expandable content would not expand unless the user makes explicit selection to do so.
:::

:::note
For example, tabbing to something that, if it were expanded, would contain other active elements, should not cause that expansion to occur with the focus jumping to the first actionable item in that expansion.  The expansion should only occur if the user asks it to be expanded. Otherwise the user cannot navigate past that element without first navigating through every active element in the expansion.
:::