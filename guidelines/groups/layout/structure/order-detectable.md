---
type: foundational
status: developing
---

Ordered content includes programmatically determinable markers that indicate the position of each item.

:::except-when
* The nature of the ordering of the content is presented immediately prior.
:::

:::note
This includes lists and processes
:::

<div class="issue" data-number="480"></div>

:::tests
<i>Process steps</i>

<b>Procedure</b>
1. Review content and identify ordered processes.
2. Each step in the process includes an indicator of its position within the process.

<b>Expected results</b>
* #2 is true


<i>HTML ordered lists</i>

<b>Procedure</b>
1. Review content and identify ordered lists.
2. Examine the HTML code and check that each ordered list is marked up with an `<ol>` element.

<b>Expected results</b>
* #2 is true
:::