---
status: developing
type: supplemental
---

Content that is exported, saved, or printed retains user-applied text-appearance customizations.

:::applies-when
* the page/view can be exported, saved, or printed.
:::

:::example
Examples of interoperable formats
* PDF
* HTML
* SVG
* OpenDocument
:::

:::example
Examples of non-interoperable formats
* Scriptable Network Graphics
* DOCX, unless you know your audience has the required software (for example, you’re writing internal documents for your company which provides employees with the necessary software)
* Java object code
:::

:::tests

<b>Procedure</b>

For each page/view:
1. Adjust aspects of the text appearance, such as size, style, and color. 
2. Export, save, and print the content.
3. Check that the customizations in #1 remain intact in the exported/saved/printed version. If there are multiple export options, check that at least one preserves the customizations.

<b>Expected results</b>
* #3 is true.
:::
