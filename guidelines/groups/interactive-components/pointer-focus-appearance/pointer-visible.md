---
status: developing
type: foundational
---

The :term[pointer] indicator is always visible.

:::except-when
- The pointer is on a video and is not moving.
- The pointer controls the direction of view in a virtual or real world environment.
:::

:::note
Methods &amp; best practices

- Method: No styling or scripting hides the pointer indicator.
:::

:::tests
**Procedure**

If the pointer is ever not visible:
1. Check that it meets one of the exceptions.

**Expected results**
* #1 is true.
:::