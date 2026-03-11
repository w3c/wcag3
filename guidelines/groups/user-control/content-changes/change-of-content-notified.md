---
status: developing
type: foundational
---

Meaningful changes in visual :term[content] are conveyed programmatically. 

:::applies-when
- The changes appear before the user’s current position in reader order.
- The changes appear earlier in the process.
- Notifications, status or error messages appear.
- The amount of content changes.
- The change affects the content’s meaning. 
- The audience changes.
:::

:::except-when
 - changes are continuous, without pause.
:::

:::example
- A new message is added in a conversation above the current location of focus. A message is provided that programmatically conveys that there is new content above.
- Filters are adjusted which changes the number of items shown. As the number of items changes, that is provided programmatically as a status update.
:::

:::tests

<b>Procedure</b>

For each meaningful change of visual content:
1. Check that the change is conveyed programmatically using the assistive technology in the accessibility support set.

<b>Expected results</b>
* #1 is true.

:::

