---
status: developing
type: foundational
---

Numerical information includes sufficient context in written text and a programmatic equivalent to avoid confusion when presenting dates, temperatures, time, and Roman numerals.

:::note
Numerical metadata is information that provides context about the numbers presented. This context helps users understand what the numbers represent and how they should be read. Without these cues, numbers can be ambiguous or misleading, making it harder for users to understand the intended meaning—especially across different regions, disciplines, or assistive technologies. 
:::

:::example
* Dates include markers for day and month such as “3 May 2025” instead of the ambiguous "03/05/2025."
* Temperatures specify degrees Celsius or Fahrenheit such as "0° C" or "32° F." 
* Times  specify am, pm, or 24-hour clock such as "1 pm" or "13:00."
* Roman numerals include a programmatic equivalent, such as an aria-label of "Henry the Fourth" for <span aria-label="Henry the Fourth">Henry IV</span>, or an inline alternative, such as Super Bowl LIX (59).
:::

:::tests
<b>Procedure</b>

For each date, temperature, time, or Roman numeral presented visually:
1. Check that it uses an unambiguous format.
2. Check that it provides an alternative in an unambiguous format within the same page/view.

<b>Expected results</b>
* #1 or #2 are true.
:::
