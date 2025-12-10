---
children:
  - custom-focus-indicator
  - user-agent-default-focus-indicator
  - supplementary-indicators
  - focus-style-guide
howto: focus-appearance
status: developing
---

Users can see which element has :term[keyboard focus].

:::decision-tree
For each focusable :term[item]:
1. Is the user agent default focus indicator used?
   - Yes, the <a href="#user-agent-default-indicator">user agent default indicator</a> is used AND the :term[accessibility support set] meets <a href="#custom-indicator">Custom focus indicators</a>. Stop.
   - No, continue.
2. Is the focus indicator defined by the author?
   - Yes, indicator must meet <a href="#custom-indicator">Custom focus indicators</a>. Stop.
   - No, fail.
:::
