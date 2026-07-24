---
status: developing
type: foundational
title: No visual motion
github issue: No visual motion
---

:::applies when
:term[Content] does includes visual motion or :term[pseudo-motion].
:::

Visual motion lasting longer than 5 seconds.

:::except-when
- The motion or pseudo-motion is :term[essential].
:::

:::ednote
<b>Method(s)</b>
* Consider if motion or pseudo-motion is essential, and if it is not, refrain from including it.
:::

:::tests
<b>Procedure</b>

For each page/view:
1. Check if content includes visual motion or pseudo-motion.
2. For each instance, check that the visual motion or pseudo-motion is essential.

<b>Expected results</b>
* #1 is false, or
* #2 is true.
:::

