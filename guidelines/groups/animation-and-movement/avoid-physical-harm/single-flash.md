---
status: exploratory
type: foundational
---

Content does not include a change of contrast (over 4.5:1) going from light to dark (or dark to light) of more than 30% of the visible content area (viewport).

:::except-when
- A new :term[page]/:term[view] is loaded.
:::


:::ednote
This is a new provision for a big, intense, single on/off flash. This is reported as a trigger by group members, but we need data on this, and a definition that includes size/intensity to avoid including non-triggers such as menus.
:::

:::ednote
<b>Method(s)</b>
* Design content without large changes of contrast. For example, when a menu with a light background is opened, it opens over a light background. Videos do not go from a dark to light background in less than a second.
:::

:::tests
<b>Procedure</b>

For each change of contrast:
1. Is the change of contrast triggered by a loading a new :term[page]/:term[view]?
2. Is the change of contrast more than 4.5:1?
3. Is the area of the change of contrast at least 30% of the viewport?

<b>Expected results</b>
* #1 is true, or #2 and #3 are false
:::