---
status: developing
type: foundational
---

If a custom :term[focus indicator] is used, it has sufficient adjacent contrast and change of contrast.

:::applies-when
* the user agent's default focus indicator is replaced by a custom focus indicator.
:::


:::tests
<b>Procedure</b>

For each element able to attain focus:

1. Using a keyboard, tab to the component.
2. Check that the focus indicator contrast meets the minimum contrast ratio test.

<b>Expected results</b>
* #2 is true.

:::