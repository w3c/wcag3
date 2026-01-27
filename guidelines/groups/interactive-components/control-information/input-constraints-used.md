---
status: developing
type: foundational
---

Field constraints and conditions (required line length, date format, password format, etc.) are available.

:::ednote
Methods &amp; best practices

- Method (HTML): to programmatically indicate, use the pattern attribute or write the information in a label; to visually indicate, add the requirements to the page near the input.

Best practice: the constraints remain persistent
:::

:::tests
**Procedure**
Find all inputs with constraints. For each input:

- Confirm it has a visual information that describes the constraint.
- Inspect the code and accessibility tree (when applicable) and confirm that the constraint is programmatically listed in the code and associated with the input.

**Expected results**
- #2 and #3 are true
:::
