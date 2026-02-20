---
status: developing
type: foundational
---

When input validation fails, the errors are visually and programmatically associated with the element that caused the error or that can resolve it.

:::example
Examples of failing validation:

- When input is required and the field is left empty
- When the user input does not meet the requested format
:::

:::tests
<b>Procedure</b>

For each validation error:
1. Check that validation error is indicated visually.
2. Check that validation error is indicated programmatically.

<b>Expected results</b>
* #1 and #2 are true.
:::
