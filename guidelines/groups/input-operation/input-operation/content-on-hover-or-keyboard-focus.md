---
status: developing
type: foundational
---

:term[Content] that appears on :term[pointer] hover or :term[keyboard focus] is:

Dismissible
:  A :term[mechanism] is available to dismiss the additional content without moving :term[pointer] hover or :term[keyboard focus], unless the additional content does not obscure or replace other content

Hoverable
: If :term[pointer] hover can trigger the additional content, then the :term[pointer] can be moved over the additional content without the additional content disappearing

Persistent
: The additional content remains visible until the hover or :term[keyboard focus] trigger is removed, the user dismisses it, or its information is no longer valid

:::note
Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML <code class="language-html">title</code> attribute.
:::

:::note
This applies to content that appears in addition to the triggering of the :term[interactive element] itself. Since hidden interactive elements that are made visible on :term[keyboard focus] (such as links used to skip to another part of a :term[page]/:term[view]) do not present additional content, they are not covered by this :term[requirement].
:::

:::example
Custom tooltips, sub-menus, and other non-modal popups that display on hover and keyboard focus.
:::