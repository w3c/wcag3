---
status: developing
type: supplemental
---

The user can ensure that the appearance of the :term[pointer] is not overridden by the authored interface.

:::except-when
- Changing the pointer appearance is essential.
:::

:::ednote
Methods &amp; best practices:

- No scripting or styling overrides the pointer indicator appearance.
- A setting is provided so that the pointer indicator appearance is not overridden.
:::

:::tests
**Procedure**

For each pointer indicator:
1. Check that the pointer uses the standard platform indicator.
2. Check for a setting that the user can enable to use the standard platform indicator.

**Expected results**
- #1 or #2 is true.
:::