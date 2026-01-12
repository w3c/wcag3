---
status: exploratory
---

In a multi-step :term[process], the interface supports stepping backwards in a process and returning to the current point without data loss.

:::except-when
- It is :term[essential] that the user cannot step back in a process.
:::
 
:::example
Certain tests may require that the user cannot go back through previously-submitted responses and change them.
:::

:::tests
<b>Procedure</b>

1. Identify any multi-step processes.
2. Verify that the user is prompted to review and confirm data.
3. Verify that the user is allowed to return to previous steps to review and change the data.
4. Verify that if a summary of all data input by the user is provided before the transaction is committed, and that a method is provided to correct errors, if necessary.

<b>Expected results</b>
* #2 is true, or 
* #3 is true, or
* #4 is true.
:::