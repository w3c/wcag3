---
needsAdditionalResearch: true
status: developing
type: supplemental
---

Where an :term[interactive element] with the same purpose is used across :term[pages]/:term[views], its visual position in the layout is maintained.

:::except-when
- The location changes due to a page variation or viewport change, or
- The layout changes due to being part of a process (such as e-commerce checkout).
:::

:::ednote
Methods &amp; best practices

- Method: Establish a design system with documented rules for consistent placement of common interactive components (for example, navigation menus, search bars, and action buttons).
- Method: Reuse the same components across pages/views instead of recreating them.
- Best practice: If a visual position must change, document why and consider providing cues (for example, animations and labels) to reduce confusion.
:::

:::tests
**Procedure**

For each interactive component in a set of pages/views:

1. Check that components appear in the same relative visual position across pages/views, except when exceptions apply.

**Expected results**
- #1 is true.
:::