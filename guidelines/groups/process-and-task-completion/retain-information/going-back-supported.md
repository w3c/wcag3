---
status: developing
type: supplemental
---

In a multi-step :term[process], the interface supports stepping backwards in a process and returning to the current point without data loss.

:::except-when
- It is :term[essential] that the user cannot step back in a process.
:::
 
:::example
Certain tests in education may require that the student cannot go back through previously-submitted responses and change them.
:::

:::tests
<b>Procedure</b>

For multi-step processes:
1. Check that the user is prompted to review and confirm data.
2. Check that the user is allowed to return to previous steps to review and change the data.
3. Check that if a summary of all data input by the user is provided before the transaction is committed, and that a method is provided to correct errors, if necessary.

<b>Expected results</b>
* #1, #2, or #3 is true.
:::