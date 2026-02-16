---
status: developing
type: foundational
---

There is a visible :term[pointer] indicator.

:::except-when
- The pointer is on a video - it can be hidden if there is a pointer mechanism to un-hide the pointer indicator.
- The pointer controls the direction of view in a virtual or real world environment.
:::

:::note
Examples of pointers which do not always show the pointer indicator:

- A touch-screen interface does not need to have an indicator as the pointer is not on an element before activating it.
- An eye-tracking interface highlights the element under the gaze of the user, but otherwise does not have a pointer indicator. 
- A game where you use the pointer to move the entire view around a virtual environment.
:::

:::note
Methods &amp; best practices:

- Method: Interactive elements are highlighted when the pointer is on the element. 
For example, a set of image-links are shown, and the one under the pointer is highlighted with an outline or size-change.
:::

:::tests
**Procedure**

With appropriate user-settings enabled:
1. Move the pointer (mouse, eye tracker, hand gesture in VR space, …).
2. Check that there is some form of indication of where the user is pointing to.

**Expected results**
- #2 is true.
:::