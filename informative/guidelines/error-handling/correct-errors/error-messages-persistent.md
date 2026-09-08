## Methods

* Keep track of the state of the error and make visibility of the error message depending on this state.
* In a form, revalidate all fields when the form is submitted and remove all error messages that are no longer relevant.
* Add a "Dismiss" button to the error that makes the error message disappear.

## Tests

<b>Procedure</b>

For each error message:
1. Check that the error message persists until the user fixes the error or dismisses the message. 

<b>Expected results</b>
* #1 is true.
