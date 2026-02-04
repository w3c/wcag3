---
status: developing
type: foundational
---

Changes to :term[interactive elements]' names, roles, values or states are visually and :term[programmatically indicated].

:::ednote
Methods &amp; best practices:

- Method: Add code that clearly defines the name, role, value and state.
- Method: visually indicate the names, roles and values of the interactive element.
- Method: HTML - html tags or aria
:::

:::tests
**Procedure**

For each interactive element:
1. Confirm that the role, value, and state (when applicable) are visually indicated in all states.
2. Inspect the code and accessibility tree (when available) to confirm that the name, role, value and state (when applicable) are indicated.

**Expected results**
- #1 and #2 are true.
:::
