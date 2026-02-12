---
status: developing
type: foundational
---

The default pointer meets the @@[non-text-contrast] requirement, and is at least as large as the platform default.

:::note
There can be multiple types of pointer indicator (e.g. arrow, hand, caret). The size requirement applies to whichever type of indicator would be the default for that scenario.
:::

:::applies-when
* the pointer indicator appearance can be adjusted from the platform default.
:::

:::tests
<b>Procedure</b>

For each custom pointer indicator:
1. Identify which visual information defines the boundaries of the interactive area.
2. Check if the visual information meets the minimum contrast ratio test.
3. For each possible state, repeat step 1 and 2.

<b>Expected results</b>
* #3 is true for each state.

:::