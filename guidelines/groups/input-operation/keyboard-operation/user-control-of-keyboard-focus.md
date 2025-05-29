---
status: exploratory
---

When the keyboard focus is moved, one of the following is true:
- The focus was moved under direct user control;
- A new [page/:term[view]] such as a dialog is introduced and focus is moved to it;
- The user is informed of the potential move and given the chance to avoid the move.

:::note
Examples of where it may be useful to ask the user if they want to jump somewhere but they should have the option to say no would be:

- Forms that say "If you answer no, you can skip questions 8 through 15", and
- When an error is detected on submit: "There is an error on the page, would you like to jump to it", especially if it also provided information on what the error was.
:::