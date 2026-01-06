---
needsAdditionalResearch: false 
status: developing
type: supplemental
title: Exported/saved/prints supports text-appearance customizations
---

Content that is exported, saved, or printed retains user-applied text-appearance customizations.

<div class="issue" data-number="502"></div>

:::applies-when
* the page/view can be exported or printed option.
:::

:::note 
Examples of interoperable formats include:
* PDF
* HTML
* SVG
* OpenDocument

Examples of non-interoperable formats include:
* Scriptable Network Graphics
* DOCX, unless you know your audience has the required software (for example, you’re writing internal documents for your company which provides employees with the necessary software)
* Java object code
:::

:::tests

<b>Procedure</b>
1. Customize a page/view by adjusting aspects of the text appearance, such as size, style, and color. 
2. Export, save, and print the content.
3. Check that the customizations remain intact in the exported/saved/printed version. If there are multiple export options, check that at least one preserves the customizations.

<b>Expected results</b>
* #3 is true.
:::
