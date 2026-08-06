## Methods

- When removing interactive elements such as filters, dialogs, or popups that currently contain focus, actively place the focus back on the element that led to that element, the previous element within the focus order, or another meaningful location.

## Best Practices

- Conduct usability testing with screen reader users to evaluate the focus movement.

## Tests

<b>Procedure</b>

For each situation where elements that have or contain keyboard focus are removed:
1. Check that the keyboard focus moves to its previous location, or, if that no longer exists, to another meaningful location.

<b>Expected results</b>
- #1 is true for each situation.
