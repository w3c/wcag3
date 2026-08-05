## Tests

<b>Procedure</b>

For each time the keyboard focus changes:
1. Check that one of the following is true:
    - The focus was moved under direct user control
    - A new page / view such as a dialog is introduced and the focus is moved to it
    - The user is informed of the potential move and given the chance to avoid the move
    - The keyboard focus moves to the next item in keyboard navigation order

<b>Expected results</b>
- #1 is true.
