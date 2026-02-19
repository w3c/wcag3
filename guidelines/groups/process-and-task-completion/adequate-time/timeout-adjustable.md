---
type: supplemental
status: developing
---

A mechanism exists to extend the time limit before timeout, or the time limit can be disabled.

:::applies-when
- Time limit(s) exist.
:::

:::except-when
- The time limit is :term[essential].
:::

:::tests
<i>Extend or disable at timeout</i>

<b>Procedure</b>

For each time limit:
1. Check if there is a way to disable it.
2. Wait for the timeout.
3. Check that before the timeout, an option is given to extend the time limit.

<b>Expected results</b>
* #3 is true.
:::