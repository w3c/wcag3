---
needsAdditionalResearch: true 
status: developing
type: foundational
---

The presentation of :term[text] style properties can be adjusted, without loss of content or functionality, to meet the @@[X values, to be determined] for:
* Typeface
* Font width
* Text decoration
* Capitalization
* Automatic end-of-line hyphenation

:::note
The requirement is that the text is manipulable and the style attributes can be overridden.
:::

:::except-when
* the text style property is hard-coded, such as raw text that is capitalized or hyphenated.
:::

:::ednote
If you are aware of research in this area, especially involving non-Latin scripts, please email public-agwg-comments@w3.org.
:::

:::tests

<b>Procedure</b>

For each block of text:
1. Apply the highest level of change of each attribute specified in the provision.
2. Check that the text is changed by the override. 

<b>Expected results</b>
* #2 is true.
:::
