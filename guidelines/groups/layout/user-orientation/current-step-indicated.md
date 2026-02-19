---
type: foundational
status: developing
---

The current step within a multi-step process is visually and programmatically indicated.

:::tests
<i>ARIA current</i>

<b>Procedure</b>

For each multi-step process:
1. Examine the source code of the HTML document.
2. Process navigation steps are included.
3. Current process step is identified using `aria-current="step"`.

<b>Expected results</b>

* Check #2 and #3 are true.

<i>Current step visually identifiable</i>

<b>Procedure</b>

For each multi-step process:
1. Visually examine the content.
2. Process navigation steps are viewable.
3. The current process step is visually distinguishable from other steps.

<b>Expected results</b>
* Check #2 and #3 are true.
:::
