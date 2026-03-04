---
status: developing
type: foundational
---

At least one of the following is true for functionality that can be activated using a :term[simple pointer input]:

No Down Event
: The :term[down event] of the :term[pointer] is not used to execute any part of the function.

Cancel
: Completion of the function is on the :term[up event] and a :term[mechanism] is available to cancel the function before completion.

Undo
: Completion of the function is on the :term[up event] and a :term[mechanism] and there is a mechanism to undo the function after completion.

Up Reversal
: The :term[up event] reverses any outcome of the preceding down event.

:::except-when
- Completing the function on the down event is :term[essential].
:::

:::example
An example of Cancel would be dragging where there is a pickup action on button down, but it can be canceled by dropping anywhere other than the drop area.
:::

:::example
Examples of places where action on down event may be essential include a descending-price auction or a game trigger.
:::

:::tests
**Procedure**

For each element that can be activated with a simple pointer:
 1. Check that the down-event of the pointer is not used to execute any part of the function.
 2. Check that completion of the function is on the up-event, and a mechanism is available to cancel the function before completion.
 3. Check that completion of the function is on the up-event, and a mechanism is available to undo the function after completion.
 4. Check that the up-event reverses any outcome of the preceding down-event.
 5. Check that completing the function on the down-event is essential.

**Expected results**
- Any of #1, #2, #3, #4, or #5 is true.
:::
