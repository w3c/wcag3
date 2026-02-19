---
status: developing
type: supplemental
---

If a custom :term[focus indicator] is used, it has sufficient size and adjacency.

:::applies-when
* the user agent's default focus indicator is replaced by a custom focus indicator.
:::

:::tests
**Procedure**

For each custom focus indicator:

1. Check that the focus indicator is at least as large as the area of a 2 CSS pixel thick perimeter of the unfocused component or sub-component, and
2. Check that the focus indicator has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.

**Except when**

- the focus indicator is determined by the user agent and cannot be adjusted by the author, or
the focus indicator and the indicator's background color are not modified by the author.

**Expected results**

- #1 and #2 are true.
:::