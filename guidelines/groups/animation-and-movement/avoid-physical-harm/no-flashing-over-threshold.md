---
status: developing
type: foundational
issueLabel: No flashing
---

All :term[flashes] are below the :term[general flash and red flash thresholds].

:::except-when
- The flashing is :term[essential].
:::

:::ednote
<b>Method(s)</b>
* Consider if :term[flashing] is :term[essential] and, if it is not, refrain from including it.
* Ensure that (an accessibility supported) user-setting to avoid animation and flashing is respected
* Ensure that any flashing is below [X] size in the users’ view.
:::

:::tests
<b>Procedure</b>

For each instance of flashing:
1. Is the flashing :term[essential]?
2. Does the flashing exceed the thresholds defined by the :term[general flash and red flash thresholds]?

<b>Expected results</b>
* #1 is true, or
* #2 is false.
:::
