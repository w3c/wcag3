---
status: developing
type: foundational
---

Data entry interfaces allow for users to do at least one of the following before submission:

* Review, confirm, and correct all information; or
* Review and correct input errors found during validation.

:::except-when
- entered data is auto-saved and/or reversible.
:::

:::ednote
Editors are looking at removing the grey area that may exist in this requirement due to interpretations of the word “submission“ (pressing “Submit” in the UI or receiving information server-side).
:::

:::tests
<b>Procedure</b>

For each data entry point:
1. Check that users can return at any point in the process to correct data they entered.
2. If it’s not possible to go back and correct the data during the process, check that the information being submitted can be reviewed and corrected before submission, or that it’s validated and can be fixed before submission. 

<b>Expected results</b>
* #1 is true, or
* #2 is true.
:::