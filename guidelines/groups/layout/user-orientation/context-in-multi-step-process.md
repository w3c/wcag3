---
title: Context in multi-step process
type: supplemental
status: developing
---

Contextual information is provided visually and programmatically to help the user orient within the multi-step process.

:::tests
<i>ARIA current</i>

<b>Procedure</b>
1. Examine the source code of the HTML document.
2. Process navigation steps are included.
3. The current process step is identified using `aria-current="step"`.


<b>Expected Results</b>
* #2 and #3 are true

<i>Current step visually identifiable</i>
<b>Procedure</b>
1. Visually examine the content.
2. Process navigation steps are viewable.
3. The current process step is visually distinguishable from other steps.

<b>Expected Results</b>
* #2 and #3 are true
