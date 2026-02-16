---
status: developing
type: foundational
---

:term[Content] does not include :term[flashing].

:::except-when
- The flashing is :term[essential].
:::

:::ednote
<b>Method(s)</b>
* Consider if flashing is essential and, if it is not, refrain from including it.
:::

:::tests
<b>Procedure</b>

For each page/view:
1. Check if content includes flashing.
2. For each instance of flashing, check that the flashing is essential.

<b>Expected results</b>
* #1 is false, or
* #2 is true.
:::
