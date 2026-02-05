---
status: developing
type: foundational
---

The foreground and background color of text can be adjusted without losing content or functionality.

:::note
The requirement is that the text is manipulable and the colors can be overridden. That could be achieved by the user-agent (including operating system, browser, and assistive technology), or provided by the content author.
:::

:::applies-when
* text is presented, including text embedded in an image format.
:::

:::except-when
- the text is:
    * also present elsewhere in the :term[page]/:term[view] which meets the requirement,
    * part of an inactive Interactive element, 
    * pure decoration, 
    * not visible to anyone,
    * part of a picture that includes significant other visual content,
    * part of a logo.
:::

:::tests
<b>Procedure</b>

For each block of text:
1. Adjust the foreground and background color to a high-contrast light-on-dark theme.
2. Check that content and functionality is not lost.
3. Adjust the foreground and background color to a high-contrast dark-on-light theme.
4. Check that content and functionality is not lost.

<b>Expected results</b>
* #2 and #4 are true.

:::

