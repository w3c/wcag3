---
status: developing
type: foundational
---

:term[Content] that appears on :term[pointer] hover or :term[keyboard focus] is:

Dismissible
:  A :term[mechanism] is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content does not obscure or replace other content

Hoverable
: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing

Persistent
: The additional content remains visible until the hover or keyboard focus trigger is removed, the user dismisses it, or its information is no longer valid

:::note
Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <code class="language-html">title</code> attribute.
:::

:::applies-when
Receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, and the visual presentation of the additional content is controlled by the author and not by the :term[user agent].
:::

:::note
This applies to content that appears in addition to the triggering of the :term[interactive element] itself. Since hidden interactive elements that are made visible on keyboard focus (such as links used to skip to another part of a :term[page]/:term[view]) do not present additional content, they are not covered by this :term[requirement].
:::

:::example
Custom tooltips, sub-menus, and other non-modal popups that display on hover and keyboard focus.
:::

:::tests

**Procedure**

For additional content that appears on hover check that:

1. The pointer can be moved over the additional content without the additional content disappearing.
2. The additional content stays visible and does not automatically close after a time.
3. The content can be closed without moving the pointer way from the trigger. Either by pressing Esc, by pressing another documented keyboard shortcut, or by activating the trigger.

For additional content that appears on focus check that:

1. The additional content stays visible and does not automatically close after a time.
2. The content can be closed without moving the focus way from the trigger. Either by pressing Esc, by pressing another other documented keyboard shortcut, or by activating the trigger.

**Expected Results**

- For additional content that appears on hover: #1, #2, and #3 are true.
- For additional content that appears on focus: #1 and #2 are true.
:::