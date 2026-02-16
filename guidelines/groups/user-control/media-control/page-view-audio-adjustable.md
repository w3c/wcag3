---
status: developing
type: foundational
title: Page/view audio adjustable
---

There are mechanisms to pause, stop, and adjust the volume independently of the overall system volume level, of any automatically playing :term[audio] in a page / view.

:::applies-when
- Notifications or other interruptions are present.
:::

:::note

Mechanisms include controls on each instance of content, or a single app-wide control that disables audio, for example: app-wide earcons.

:::

:::tests

<b>Procedure</b>

For each page / view:
1. Check for audio that starts automatically.
2. For audio content in a media player, check that the media player has controls that can pause, stop, or adjust the audio volume.
3. For audio content set at an application level, check that there is a central setting that enables or disables audio across the application.
4. Check that one of these are present:
  a. There is a mechanism within the first three elements in the page / view for the user to pause, stop, or adjust the audio volume;
  b. There are keyboard controls that can pause, stop, or adjust the audio volume.

<b>Expected results</b>
* #2, #3, or #4 is true.

:::