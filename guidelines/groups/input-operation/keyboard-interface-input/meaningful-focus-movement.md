---
status: developing
type: foundational
---

The :term[keyboard focus] returns to its previous location or is moved to another meaningful location, when the element that has or includes the keyboard focus is removed.

:::example
When a user closes a modal dialog or other popup, keyboard focus is returned to the element that caused the dialog or popup to open.
:::

:::example
When there are tags, with a delete button on each tag, the keyboard focus needs to be moved to a meaningful location after a tag is deleted.
:::

:::ednote
Method: When removing interactive elements such as filters, dialogs, or popups that currently contain focus, actively place the focus back on the element that led to that element, the previous element within the focus order, or another meaningful location.

Best Practice: Conduct usability testing with screen reader users to evaluate the focus movement. 
:::

:::tests
**Procedure**
1. Identify situations in the conformance scope where elements that have or contain keyboard focus are removed.
2. For each situation, verify that the keyboard focus moves to its previous location, or, if that no longer exists, to another meaningful location.

**Expected Results**
- #2 is true for each situation
:::