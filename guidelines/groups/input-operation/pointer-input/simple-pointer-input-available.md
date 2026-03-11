---
status: developing
type: foundational
---

All functionality and content available using :term[complex pointer inputs] is also available using a :term[simple pointer input] or a sequence of simple pointer inputs that do not require timing.

:::example
Examples of complex pointer inputs:

- Double clicks
- Dragging movements
- Swipe :term[gestures]
- Multipoint gestures such as pinching, split tap, or two-finger rotor
- Variable pressure or timing
:::

:::note
Complex pointer inputs are not banned, but they cannot be the only way to accomplish an action.
:::

:::note
Simple pointer input is different than :term[single pointer input] and is more restrictive than simply using a single pointer.
:::

:::tests
**Procedure**

For each functionality that uses pointer input other than simple pointer input:
1. Check that it can also be operated by a simple pointer input or a sequence of simple pointer inputs that do not require timing.

**Expected results**
- #1 is true.
:::
