---
status: developing
type: supplemental
---

Error messages are :term[visually collocated with] the error source or the focus is moved to the error message and a mechanism is available to move to the input that is in error. 

:::applies-when
- Error messages relate to user input.
:::

:::tests
<b>Procedure</b>

For each page/view:
1. Zoom in 400%
2. Trigger errors
3. Check that the error is visible next to the trigger or that the focus moves to the error. 

<b>Expected results</b>
* #3 is true.
:::