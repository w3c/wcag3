---
status: developing
---

A mechanism exists to extend the time limit at timeout, or to disable the timeout at any point.

:::applies-when
Time limits exist.
:::

:::except-when
The time limit is essential.
:::

:::tests
<i>Extend or disable at timeout</i>

<b>Procedure</b>
1. Identify the presence of a time limit.
2. Wait for the timeout.
3. Verify that the timeout includes a notification with options to extend or disable the timeout.

<b>Expected results</b>
* #3 is true.
:::