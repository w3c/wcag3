---
status: developing
type: supplemental
---

 :term[Content] that appears on :term[pointer] hover or :term[keyboard focus] remains visible until the hover or keyboard focus trigger is removed, the user dismisses it, or its information is no longer valid.

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

For additional content or focus that appears on hover:

1. Check that the additional content stays visible and does not automatically close after a time.

**Expected results**

- #1 is true.
:::
