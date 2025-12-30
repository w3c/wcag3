---
needsAdditionalResearch: false 
status: exploratory
type: foundational
title: Human language
---

The human language of all :term[content] within the :term[view] is :term[programmatically] determinable.

:::except-when
* a language tag is not available in ISO 639 language codes, or
* the technology used to create the view does not support indicating languages.
:::

:::tests

Procedure
1. Establish which languages are used in the view.
2. Check that the content’s language is identified in the HTML code with a lang attribute.

Expected results
* #2 is true.
:::

