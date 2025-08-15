---
status: developing
type: foundational
---

For functionality that can be activated using a :term[simple pointer input], at least one of the following is true:

No Down Event
: The :term[down event] of the pointer is not used to execute any part of the function

Abort or Undo
: Completion of the function is on the :term[up event], and a :term[mechanism] is available to abort the function before completion or to undo the function after completion

Up Reversal
: The :term[up event] reverses any outcome of the preceding down event

Essential
: Completing the function on the down event is :term[essential]

:::example
An example of Abort would be dragging where there is a pickup action on button down, but it can be canceled by dropping anywhere other than the drop area.
:::

:::example
Examples of places where action on down event may be essential include [Dutch auction](https://en.wikipedia.org/wiki/Dutch_auction) or game trigger.
:::
