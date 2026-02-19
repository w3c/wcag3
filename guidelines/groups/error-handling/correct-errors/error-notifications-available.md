---
status: developing
type: foundational
---

Errors that are :term[programmatically determined] are identified and the problem is described to the user in text.

:::example
Examples of errors:

- Invalid form input
- Server errors
- Application errors
:::

:::tests
<b>Procedure</b>

For each page/view:
1. Trigger errors.
2. For each error, check that the nature of the problem is identified and described.

<b>Expected results</b>
* #2 is true for each error.
:::
