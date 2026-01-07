---
status: developing
type: foundational
---

Sentences do not include :term[nested clauses].

:::except-when
* content provides legal or technical information.
:::

:::examples
(Fail) 'The teacher was surprised that the student who aced yesterday's test was absent today.'
(Pass) 'The teacher was surprised that the student was absent today. This was unexpected because he aced yesterday's test.'
:::

:::tests

<b>Procedure</b>

For each sentence:
1. Identify all nested clauses in the sentence (introduced by nesting conjunctions such as ‘because’, ‘although’, ‘if’, ‘that’, ‘which’, ‘who’, ‘when’, and ‘where’).

2. Check that each initial nested clause does not contain other nested clauses within it.

3. Check that a technology in the accessibility support set meets ‘No nested clauses’. 

<b>Expected results</b>
* #2 is true, or
* #3 is true.
:::
