---
status: developing
type: foundational
---

At least one of the following is true for functionality that can be activated using a :term[simple pointer input]:

No Down Event
: The :term[down event] of the :term[pointer] is not used to execute any part of the function

Cancel or Undo
: Completion of the function is on the :term[up event], and a :term[mechanism] is available to cancel the function before completion or to undo the function after completion

Up Reversal
: The :term[up event] reverses any outcome of the preceding down event

Except when:

- Completing the function on the down event is :term[essential]

:::example
An example of Cancel would be dragging where there is a pickup action on button down, but it can be canceled by dropping anywhere other than the drop area.
:::

:::example
Examples of places where action on down event may be essential include a descending-price auction or a game trigger.
:::

:::tests
**Procedure**
1. For each element that can be activated with a simple pointer, check the following until you find one that is true:
    1. No Down-Event
	    - The down-event of the pointer is not used to execute any part of the function;
    2. Cancel or Undo
      - Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;
    3. Up Reversal
      - The up-event reverses any outcome of the preceding down-event;
    4. Essential
      - Completing the function on the down-event is essential.

**Expected results**
- #1 is true
:::