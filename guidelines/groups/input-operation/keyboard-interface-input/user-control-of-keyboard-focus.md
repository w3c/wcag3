---
status: developing
type: foundational
---

When the keyboard focus is moved, one of the following is true:
- The focus was moved under direct user control;
- A new :term[view] such as a dialog is introduced and focus is moved to that view;
- The user is informed of the potential keyboard focus move before it happens and given the chance to avoid the move;
- The keyboard focus moves to the next item in keyboard navigation order automatically on completion of some user action.

:::note
Examples of where it may be useful to "jump the user to some other location" (after of course asking the user if they want to move there) would be:
- a form message that says "If you answer no, you can skip questions 8 through 15, would you like to skip to question 16"; and
- when a form error is detected on submit and a message says "There is an error on the page, would you like to jump to it" (especially if it also provided information on what the error was).
:::