---
title: Multi-step navigation
type: foundational
status: developing
---

A list of all steps in a multi-step process is visually and programmatically available at each step.

:::except-when
The total number of steps is unknown, or the sequence of steps depends on user actions.
:::

:::ednote
Clarify the required level of detail: should this include only top-level steps, or also sub-steps?
:::

:::tests
<i>Visual multi-step listing</i>

<b>Procedure</b>
1. Review the content within each stage of a multi-step process.
2. A list of steps in the process is included on each stage.

<b>Expected Results</b>
* #2 is true

<i>HTML multi-step listing</i>

<b>Procedure</b>
1. Examine the HTML source code for each step of the process.
2. An `<ol>` is included with a `<li>` for each step of the process at each step.
3. The `<ol>` is included in the accessibility tree.

<b>Expected Results</b>
* #2 and #3 are true
:::