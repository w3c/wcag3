---
status: exploratory
type: foundational
---

When receiving and then removing :term[pointer] hover or keyboard focus triggers additional content to become visible and then hidden, and the visual presentation of the additional content is controlled by the author and not by the :term[user agent], all of the following are true:

Dismissible

:  A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content does not obscure or replace other content;

Hoverable

: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;</dd>

Persistent

: The additional content remains visible until the hover or keyboard focus trigger is removed, the user dismisses it, or its information is no longer valid.

:::note
Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <code class="language-html">title</code> attribute.
:::

:::note
Custom tooltips, sub-menus, and other non-modal popups that display on hover and keyboard focus are examples of additional content covered by this criterion.
:::

:::note
This criterion applies to content that appears in addition to the triggering component itself. Since hidden components that are made visible on keyboard focus (such as links used to skip to another part of a :term[page] / :term[view]) do not present additional content they are not covered by this criterion.
:::
