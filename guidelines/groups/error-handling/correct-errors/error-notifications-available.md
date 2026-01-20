---
status: developing
type: foundational
---

Errors that are :term[programmatically determined] are identified and the problem is  described to the user.

:::note
Examples of errors include invalid form input, server errors or application errors.
:::

:::tests
<b>Procedure</b>
1. Identify parts of the conformance scope where errors can occur.
2. Trigger errors.
3. For each error, verify that the nature of the problem is identified and described.

<b>Expected results</b>
* #3 is true for each error.
:::