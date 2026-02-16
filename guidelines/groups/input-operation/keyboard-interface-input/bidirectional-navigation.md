---
status: developing
type: foundational
---

The keyboard interface can always move forward to the next interactive element and back to the previous interactive element.

:::note
Although keyboard navigation is required to be bidirectional, it is not required that it be symmetrical, even though this is usually best practice.
:::

:::note
Methods &amp; best practices:

- Method: Use standard HTML to create interactive elements.
- Avoid modifying the tab order to be in only one direction.
:::

:::example
Tabbing through menus, hitting <kbd>space</kbd> to open a menu, tabbing off the end of the menu lands you on the next menu. A <kbd><kbd>shift</kbd>+<kbd>tab</kbd></kbd> may go back to the last item in the previous menu (symmetrical) or to the last menu (not symmetrical but also does not fail this requirement).
:::

:::tests
**Procedure**

For each interactive element:
1. Check that when tabbing forwards, you can navigate to the interactive element and then to the next interactive element.
2. Check that when tabbing backwards, you can navigate to the interactive element and then to the previous interactive element.

**Expected results**
- #1 and #2 are true.
:::