---
status: developing
type: foundational
---

The keyboard interface can always move forward to the next interactive element and back to the previous interactive element.

:::note
Although keyboard navigation is required to be bidirectional, it is not required that it be symmetrical, even though this is usually best practice.
:::

:::example
Tabbing through menus, hitting <kbd>space</kbd> to open a menu, tabbing off the end of the menu lands you on the next menu. A <kbd><kbd>shift</kbd>+<kbd>tab</kbd></kbd> may go back to the last item in the previous menu (symmetrical) or to the last menu (not symmetrical but also does not fail this requirement).
:::

:::tests
- Move through content using forward navigation techniques. After each forward movement check that you can move back to the last position using the keyboard only. Repeat by moving forward two and back one etc until you reach the bottom of the page or the top of the :term[page] / :term[view] if there is rollover for the page / view.
- PASS: you can always move back
- FAIL: you cannot move back
:::