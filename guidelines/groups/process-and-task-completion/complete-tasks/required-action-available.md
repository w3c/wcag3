---
status: developing
type: supplemental
---

The interface indicates when user input or action is required in order to proceed to the next step.

:::applies-when
- The user needs to complete an action in order to proceed to the next step. For example: the user needs to agree to the terms and conditions before they can submit the form.
:::

:::tests
<b>Procedure</b>

For any parts of a process that cannot be completed without the user doing a required action:
1. Enter in all the information except for the required action(s).
2. Try to complete the process.
3. Check that there is a notification that explains what the user needs to do before the process can be completed.

<b>Expected results</b>
* #3 is true.
:::