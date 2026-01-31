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
**Procedure**
For each interactive element:
1. Check that after a forward movement onto the interactive elemennt, that you can move back to the last position using the keyboard only. 
2. Check that after a forward movement on the interactive element, that you can move forward to teh next position using the keyboard only. 

**Expected results**
- #1 and #2 are true
:::