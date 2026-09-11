## Tests

<i>Ensure the current step is explicitly labeled as the current step</i>

<b>Procedure</b>

For each multi-step process:
1. Identify the current step. Verify that the step includes an explicit textual label or accessible text alternative indicating its status (e.g., "current", "active", "Step X of Y")
3. Verify that this label is part of the visible content of the step and included in the accessibility tree

<b>Expected results</b>

#2 and #3 are true

<i>Ensure the current step is visually and programmatically indicated</i>

<b>Procedure</b>

For each multi-step process:
1. Identify the current step.
2. Verify that the step is visually distinguished from other steps (e.g., styling, icon, layout).
3. Verify that the current status is also exposed programmatically using aria-current="step".

<b>Expected results</b>
#2 and #3 are true

<i>Ensure the current step is identified through a page heading</i>

<b>Procedure</b>

For each multi-step process:
1. Identify the current step
2. Verify that a heading exists that corresponds to the current step
3. Verify that no other headings associated with other steps are used within the same view or page.

<b>Expected results</b>
#2 and #3 are true
