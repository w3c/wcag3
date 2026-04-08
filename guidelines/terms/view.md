---
status: developing
synonyms:
  - views
---

The collection of :term[content] that is :term[actively available] in a :term[viewport] including that which can be scrolled, zoomed or panned to, and any additional content that is conditionally shown while leaving the rest of the content in the viewport actively available 

:::note
“Conditionally shown content” is content that appears based on conditions like user interaction, changes in application state, changes in viewport size, or changes in screen orientation.
:::

:::example
A modal dialog constitutes a new view, because the other content in the viewport is no longer actively available. On the web, navigating to a different page rather than within one, also constitutes a new view. 

Non-modal dialogs, expanding paragraphs or sections, tooltips, “toast” notifications, fold out menus, and inline error messages are all part of the same views, as they leave other content actively available. 

Nested views are also part of the same view (the outer most view). For example, on the web, nested `iframe`s do not constitute a new view.
:::