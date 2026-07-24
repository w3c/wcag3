---
status: developing
type: supplemental
issueLabel: No repetitive links
---

The :term[page]/:term[view] does not have adjacent :term[interactive elements] that achieve the same outcome

:::except-when
- That outcome is a form of dismissal.
:::

:::note
A common pattern is having a :term[component] that includes a linked image and some linked :term[text], where both links go to the same content. Someone using screen reading software can be disoriented from the unnecessary chatter, and a keyboard user has to navigate through more tab stops than should be necessary. Combining adjacent links that go to the same content improves the user experience.
:::

:::note
Methods &amp; best practices

- Method: When repetitive interactive elements are used, remove them from the focus and reading order.
- Method: Use a single link instead of multiple links to the same destination.
- Best practice: Combine repetitive links into a single interactive element.
:::

:::example
A modal dialog has a button labelled X. It also has a button labelled Close. The buttons are next to each other in the DOM (Document Object Model) and both dismiss the modal dialog. This meets the exception.
:::

:::tests
**Procedure**

For adjacent interactive elements that achieve the same outcome:
1. Check that only one of the elements is focusable and available to assistive technology.

**Expected results**
- #1 is true.
:::
