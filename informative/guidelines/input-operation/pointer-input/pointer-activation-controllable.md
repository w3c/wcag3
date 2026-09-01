## Tests

<b>Procedure</b>

For each element that can be activated with a simple pointer:
1. Check that the down-event of the pointer is not used to execute any part of the function.
2. Check that completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion.
3. Check that the up-event reverses any outcome of the preceding down-event.
4. Check that completing the function on the down-event is essential.

<b>Expected results</b>
- Any of #1, #2, #3, or #4 is true.
