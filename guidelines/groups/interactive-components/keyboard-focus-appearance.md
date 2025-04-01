---
children:
  - custom-indicator
  - user-agent-default-indicator
  - supplementary-indicators
  - style-guide
howto: focus-appearance
status: developing
---

Users can see which :term[element] has keyboard focus.

:::decision-tree
For each focusable item:
1. Is the user agent default focus indicator used?
   - Yes, the <a href="#user-agent-default-indicator">user agent default indicator</a> is used AND the <em>accessibility support set</em> meets <a href="#custom-indicator">Custom focus indicators</a>. Stop.
   - No, continue.
2. Is the focus indicator defined by the author?
   - Yes, indicator must meet <a href="#custom-indicator">Custom focus indicators</a>. Stop.
   - No, fail.
:::
