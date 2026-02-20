---
status: developing
type: supplemental
---

Error messages persist at least until the error is resolved or the user dismisses them.

:::ednote
Methods & best practices 
* Method: Keep track of the state of the error and make visibility of the error message depending on this state.
* Method: In a form, revalidate all fields when the form is submitted and remove all error messages that are no longer relevant.
* Method: Add a "Dismiss" button to the error that makes the error message disappear.
* Best Practice: [1-2 sentence description or a link to an example] 
:::

:::tests
<b>Procedure</b>

For each error messages: 
1. Check that the error message persists until the user fixes the error or dismisses the message. 

<b>Expected results</b>
* #1 is true.
:::