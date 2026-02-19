---
status: developing
type: foundational
title: Focus user-controlled
---

The :term[keyboard focus] only moves as a result of user interaction.

:::except-when
- The keyboard focus automatically moves to the next interactive elements in keyboard navigation order on completion of some user action, such when the focus moves between the fields for a time-based one-time password (TOTP) code.
- The keyboard focus results from security or emergency situations, such as warning about an imminent session timeout that would cause the user to lose their work.
- The user is informed of the potential keyboard focus move before it happens and given the chance to avoid the move.
:::

:::tests
**Procedure**

For each time the keyboard focus changes:
1. Check that one of the following is true:
    - The focus was moved under direct user control
    - A new page / view such as a dialog is introduced and the focus is moved to it
    - The user is informed of the potential move and given the chance to avoid the move
    - The keyboard focus moves to the next item in keyboard navigation order

**Expected results**
- #1 is true.
:::