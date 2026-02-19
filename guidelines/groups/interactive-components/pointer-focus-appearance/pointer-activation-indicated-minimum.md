---
status: developing
title: Pointer activation indicated (minimum)
type: foundational
---

There is a visible indication of the activation of an interactive element when selected by the :term[pointer].

:::applies-when
- The platform does not use a visible pointer indicator.
:::

:::note
This is primarily aimed at touch-interfaces and VR where you don’t have a pointer indicator, but do need to know when something has been selected.
:::

:::tests
**Procedure**

Where the platform does not use a visible pointer indicator, for each interactive element:
1. Check that there is an indicator of activation.

**Expected results**
- #1 is true.
:::