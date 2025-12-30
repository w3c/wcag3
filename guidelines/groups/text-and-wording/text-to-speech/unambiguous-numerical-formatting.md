---
needsAdditionalResearch: false 
status: developing
type: foundational
title: Unambiguous numerical formatting (programmatic) 
---

Numerical information includes programmatic context to avoid confusion when presenting dates, temperatures, time, and Roman numerals.

:::example
* Dates include markers for day and month such as “3 May 2025” instead of the ambiguous "03/05/2025."
* Temperatures specify degrees Celsius or Fahrenheit such as "0° C" or "32° F." 
* Times  specify am, pm, or 24-hour clock such as "1 pm" or "13:00."
* Roman numerals use markup such as <span aria-label="Henry the Fourth">Henry IV</span> or inline alternatives such as Super Bowl LIX (59).
:::

:::tests

Procedure
1. Identify any dates, temperatures, times, and Roman numerals that are presented visually.
2. Check that it uses an unambiguous format.
3. Check that it provides an alternative in an unambiguous format within the same page/view.

Expected results
* #2 is true, or 
* #3 is true.
:::

