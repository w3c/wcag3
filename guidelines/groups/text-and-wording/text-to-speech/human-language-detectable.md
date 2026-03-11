---
status: developing
type: foundational
---

The :term[human language] of all :term[content] within the :term[view] is :term[programmatically determinable].

:::except-when
* a language tag is not available in ISO 639 language codes, or
* the technology used to create the view does not support indicating languages.
:::

:::tests

<b>Procedure</b>

For text content:
1. Establish which language is used.
2. Check that the content’s language is identified in the HTML code with a lang attribute.

<b>Expected results</b>
* #2 is true.
:::

