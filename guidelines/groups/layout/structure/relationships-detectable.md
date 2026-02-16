---
type: supplemental
status: developing
---

:term[Relationships of meaning] between elements are conveyed programmatically.

:::tests
<i>HTML hierarchical relationship</i>

<b>Procedure</b>
1. Determine the contextual hierarchy of the content either visually or through the meaning of the content.
2. Examine the source code of the HTML document to identify each hierarchical section.
3. Check that each section uses an appropriate semantic HTML element that reflects its position in the hierarchy.

<b>Expected results</b>
* #3 is true.


<i>HTML input field/label relationship</i>

<b>Procedure</b>
For each input field within the unit of conformance:
1. Check that each `<input>`, `<select>` and `<textarea>` in the source code has a programmatically associated `<label>` using `for` and `id` attributes. 

<b>Expected results</b>
* #1 is true.


<i>HTML list relationship</i>

<b>Procedure</b>

For each list within the unit of conformance:
1. Check that each list consists of a `<ul>`, `<ol>` or `<dl>`.
2. Check that each list item within the list is contained within an `<li>` element (for `<ul>` and `<ol>`) or `<dt>`/`<dd>` pair (for `<dl>`).
3. Check that the immediate child element of the list is an `<li>` element (for `<ul>` and `<ol>`) or `<dt>`/`<dd>` pair (for `<dl>`).

<b>Expected results</b>
* #1, #2 and #3 are true.


<i>HTML nested list relationship</i>

<b>Procedure</b>

For each nested list within the unit of conformance:
1. Check that all child lists are contained within a `<li>` of the parent list.

<b>Expected results</b>
* #1 is true.
:::