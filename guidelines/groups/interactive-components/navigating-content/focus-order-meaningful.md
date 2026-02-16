---
status: developing
type: foundational
---

The :term[keyboard focus] moves sequentially through :term[content] in an order and way that preserves meaning and operability.

:::note
- The :term[Common Keyboard Navigation Techniques] are considered logical by default
- Having the navigation follow a consistent pattern on the page would be an indication of logic (if it is not consistently random).
- A strictly start-to-end order is not required.
- Linear means in a single direction (forward/backward) - and is not required as long the non-linear (x-y) technique is in the Common Keyboard Navigation Techniques or is described on the page or where the user will encounter it prior.
:::

:::tests
**Procedure**

For each page/view: 
1. Determine the logical order of the interactive elements.
2. Starting with the first focusable element in the page/view, tab through the interactive elements in the content.
3. Check that the focus order of the interactive elements in the content is the same as the logical order in #1.

**Expected results**
- #3 is true.
:::