---
status: developing
type: foundational
title: Human language detectable
---

The human language of all :term[content] within the :term[view] is :term[programmatically] determinable.

<div class="issue" data-number="486"></div>

:::except-when
* a language tag is not available in ISO 639 language codes, or
* the technology used to create the view does not support indicating languages.
:::

:::tests

<b>Procedure</b>
1. Establish which languages are used in the view.
2. Check that the content’s language is identified in the HTML code with a lang attribute.

<b>Expected results</b>
* #2 is true.
:::

