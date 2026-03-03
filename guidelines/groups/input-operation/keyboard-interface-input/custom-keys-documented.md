---
status: developing
type: supplemental
---

:term[Custom keyboard commands] are documented, and that documentation is programmatically and visually available from any :term[page]/:term[view] to which they apply.

:::tests
**Procedure**

For each :term[custom keyboard command] that works on a page/view:
1. Check that documentation of the keyboard commands exists.
2. Check that the documentation is available from the page/view.

**Expected results**
- #1 and #2 are true.
:::

:::actrules
This is an Atomic rule to test Custom Keys Documented.

This rule checks that custom keyboard commands are documented and that documentation is programmatically and visually available from any page/view to which they apply.

Applicability
: This rule applies to any page/view in which an author has provided a custom keyboard command.

Expectation
: The custom keyboard command is documented, and programmatically and visually available from any page/view to which it applies.

**Examples:**

Passed example 1
: A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented as programmatically related description text for the input.
: [Passing example 1](https://cdpn.io/pen/debug/dPpyVZQ/508d2feff6fba738c4a825c54d8cb94c)

Passed example 2
: A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented on a linked "Help" page.
: [Passing example 2](https://cdpn.io/pen/debug/NPRqpVE/8f986544250fe7aeb8a735b9f360aa55)

Passed example 3
: A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented in a "Help" dialog on the same page.
: [Passing example 3](https://cdpn.io/pen/debug/jEMPmbo/aa609131893aeb780d6ae8dec937ad5a)

Failed example 1
: A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is not documented.
: [Failing example 1](https://cdpn.io/pen/debug/NPRWwQz/5c356df52c39edfb01b9ed818a4978be)

Failed example 2
: A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is visually documented but not programmatically determinable.
: [Failing example 2](https://cdpn.io/pen/debug/emdNWRZ/6ceb5de85415f41a857f448761e17625)

Failed example 3
: A search input can be focused using a custom keyboard command of s. This custom keyboard command is not documented. As a red herring, a custom keyboard command of / (forward slash) is documented, but does nothing.
: [Failing example 3](https://cdpn.io/pen/debug/jEMPwvL/06f138a6e48b1f8bd3fc93b6fc341160)

Inapplicable example 1
: A button reveals a tooltip of "Press Space to activate" on focus and hover. The documentation is not necessary since it is describing a standard platform keyboard command.
: [Inapplicable example 1](https://cdpn.io/pen/debug/MYjwmrK/48bed407ee26b415885c0b7cd1a35d66)
:::