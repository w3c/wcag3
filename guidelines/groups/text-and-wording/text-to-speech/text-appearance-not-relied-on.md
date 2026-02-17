---
status: exploratory
type: foundational
---

Meaning conveyed by :term[text] style properties is also :term[programmatically determinable].

:::applies-when
* the styling, weight, or other text characteristics convey meaning beyond what the text itself says.
:::

:::except-when
* emphasis is the only additional meaning conveyed.
:::

:::example
* (Pass) When bold or italics is used to indicate an error, an additional indicator such as an exclamation mark (!) is also provided.
* (Pass) When larger text is used as a hint in a puzzle, an additional indicator such as an asterisk (*) is also provided.
:::

:::tests
<b>Procedure</b>

For each instance of text styling, weight, size, or other text characteristics that conveys meaning that is not just emphasis:
1. Check that an additional indicator of that meaning is available. 

<b>Expected results</b>
* #1 is true.
:::
