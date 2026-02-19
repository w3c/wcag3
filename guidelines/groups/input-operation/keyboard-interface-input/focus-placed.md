---
status: developing
type: supplemental
---

When :term[keyboard focus] moves from one context to another within a :term[page]/:term[view], whether automatically or by user request, the keyboard focus is preserved so that, when the user returns to the previous context, the keyboard focus is restored to its previous location unless that location no longer exists.

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

For each situation where elements that have or contain keyboard focus are removed:
1. Check that the keyboard focus moves to its previous location, or, if that no longer exists, to another meaningful location.

**Expected results**
- #1 is true for each situation.
:::