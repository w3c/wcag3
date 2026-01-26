---
type: foundational
status: developing
title: Keyboard focus user-controlled
---

The :term[keyboard focus] only moves as a result of user interaction.

:::except-when
* The keyboard focus automatically moves to the next interactive elements in keyboard navigation order on completion of some user action, such when the focus moves between the fields for a time-based one-time password (TOTP) code.
* The keyboard focus results from security or emergency situations, such as warning about an imminent session timeout that would cause the user to lose their work.
* The user is informed of the potential keyboard focus move before it happens and given the chance to avoid the move.
:::

:::ednote
Methods & best practices 
* Method: Move the keyboard focus only when the user advances it with a common keyboard command or interacts with an interactive element.  Avoid automatically moving the :term[keyboard focus] without user interaction.
:::

:::tests
**Procedure**
1. Using the keyboard, complete all functionality within the conformance scope.
2. Pause (do not interact) at various times. Note: #1 and #2 is often done during other manual testing.
3. Verify that the focus moves as a result of user interaction.
4. If the focus moves automatically, verify that you were notified prior to the movement or it results from a security or emergency situation.

**Expected results**
* #3 is true. 
* #4 is true for all instances that focus moves automatically.
