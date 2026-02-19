---
status: developing
type: foundational
title: Orientation supported (minimum)
---

If the platform has a :term[default orientation], content supports that orientation. If the platform does not have a default orientation, content supports both portrait and landscape orientations.

:::except-when
* Content is aligned with the physical world.
* The orientation is :term[essential].
:::

:::note
For extended reality, the platform default orientation aligns with the real world orientation.
:::

:::note
Content does not have to re-layout or change aspect ratio in a different orientation, it just needs to display in the device orientation.
:::

:::tests
<b>Procedure</b>

For platforms which have a default orientation:
1. Open the content.
2. Check that the orientation aligns with the platform default.

For platforms which do not have a default orientation:
1. Open the content
2. Check that the orientation can align with both portrait and landscape orientations.

<b>Expected results</b>
* #2 is true.
:::