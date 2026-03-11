---
status: developing
type: foundational
---

Automated input of personal information from user agents, third-party tools, or paste is not prevented.

:::note
Personal information includes names, passwords, et cetera.
:::

:::tests

<b>Procedure</b>

For each form that requests personal information:
1. Ensure there is a test identity set up in the browser.
2. Navigate to a form requiring the input of personal information.
3. Check that the browser tools automatically populate personal information into the form.

<b>Expected results</b>
* #3 is true.
:::