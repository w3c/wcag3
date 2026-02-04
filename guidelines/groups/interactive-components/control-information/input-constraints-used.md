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

For each input:
1. Confirm it has a visual information that describes the constraint.
2. Inspect the code and accessibility tree (when applicable) and confirm that the constraint is programmatically listed in the code and associated with the input.

**Expected results**
- #1 and #2 are true.
:::
