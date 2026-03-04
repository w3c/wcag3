---
status: developing
type: supplemental
---

The :term[page]/:term[view] does not have adjacent :term[interactive elements] that achieve the same outcome

:::except-when
- That outcome is a form of dismissal.
:::

:::ednote
Supplemental if applicable to all :term[content], else best practice.
:::

:::example
A modal dialog has a button displaying an X. It also has a button labelled Close. The buttons are next to each other in the DOM (Document Object Model) and both dismiss the modal dialog. This meets the exception.
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

:::tests
**Procedure**

For adjacent interactive elements that achieve the same outcome:
1. Check that only one of the elements is focusable and available to assistive technology.

**Expected results**
- #1 is true.
:::

:::actrules
This is an Atomic rule to test No Repetitive Adjacent Interactive Elements

This rule checks that a page/view includes no adjacent interactive elements that achieve the same outcome unless the interactive elements are included to dismiss the same element.

Applicability
: This rule applies to any page/view in which an author has provided a custom keyboard command.

Expectation
: The custom keyboard command is documented, and programmatically and visually available from any page/view to which it applies.

**Examples:**

Passed example 1
: A page/view includes multiple interactive elements and no adjacent elements go to the same destination.

Passed example 2
: A page/view includes repetitive adjacent interactive elements but only one is in the focus order and is :term[programmatically determinable].

Failed example 1
: A page/view includes adjacent interactive elements that have the same destination and are in the focus order or are programmatically determinable.

Inapplicable example 1
: A page/view includes no interactive elements.

Inapplicable example 2
: A modal dialog includes multiple adjacent interactive elements that dismiss the dialog element.
:::