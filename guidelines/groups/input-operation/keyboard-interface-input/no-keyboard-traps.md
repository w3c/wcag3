---
status: developing
type: foundational
---

Components that can be activated or entered using the keyboard interface, can be deactivated or exited using a standard keyboard navigation-operation technique, standard platform keyboard commands.

:::except-when
- The non-standard keyboard navigation technique is described on the :term[page]/:term[view] or earlier in the :term[process].
::: 

:::example
Examples include:

1. Ensuring that users can exit a modal dialog, menu, or calendar picker after entering it
2. Ensuring that users can deactivate an animation, video, drop down menu, or carousel after activating it.
:::

:::tests
**Procedure**

For each interface element:
1. Check that you can exit from it in a forward or backward direction.

**Expected results**
- #1 is true.
:::