---
status: developing
type: foundational
---

Visual information required to identify :term[interactive elements] and states meet a minimum :term[contrast ratio test]

:::except-when
* the interactive element is inactive, or 
* when the appearance of the component is determined by the :term[user agent] and not modified by the content author.

:::tests
<b>Procedure</b>

For each interactive element:
1. Identify which visual information defines the boundaries of the interactive area.
2. Check if the visual information meets the minimum contrast ratio test.
3. For each possible state, repeat step 1 and 2.

<b>Expected results</b>
* #2 and #3 are true.

:::