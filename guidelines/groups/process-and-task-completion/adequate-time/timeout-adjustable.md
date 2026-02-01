---
type: foundational
status: developing
---

A mechanism exists to extend the time limit before timeout, or the time limit can be disabled.

:::applies-when
Time limit(s) exist.
:::

:::except-when
The time limit is :term[essential].
:::

:::tests
<i>Extend or disable at timeout</i>

<b>Procedure</b>
1. Identify the presence of a time limit.
2. Verify if there is a way to disable it.
3. Wait for the timeout.
4. Verify that before the timeout, an option is given to extend the time limit.

<b>Expected results</b>
* #3 is true.
:::