---
status: developing
type: foundational
---

If pointer hover can trigger :term[content], then the pointer can be moved over the additional content without the additional content disappearing.

:::example
Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <code class="language-html">title</code> attribute.
:::

:::applies-when
- Receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, and the visual presentation of the additional content is controlled by the author and not by the :term[user agent].
:::

:::note
This applies to content that appears in addition to the triggering of the :term[interactive element] itself. Since hidden interactive elements that are made visible on keyboard focus (such as links used to skip to another part of a :term[page]/:term[view]) do not present additional content, they are not covered by this :term[requirement].
:::

:::example
Custom tooltips, sub-menus, and other non-modal popups that display on hover and keyboard focus.
:::

:::tests

**Procedure**

For additional content that appears on hover:

1. Check that the pointer can be moved over the additional content without the additional content disappearing.


**Expected results**

- #1 is true.
:::
