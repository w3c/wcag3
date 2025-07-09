---
status: developing
type: foundational
---

When :term[keyboard focus] moves from one context to another within a web page, whether automatically or by user request, the :term[keyboard focus] is preserved so that, when the user goes back to the previous context, the :term[keyboard focus] is restored to its previous location except if that location no longer exists.

:::note
An example of this would be when a modal dialog or other pop up opens.
:::

:::note
Best practice on placing focus when the previous focus location no longer exists, is to put focus on the focusable location just before the one that was removed. An example of this would be a list of subject-matter tags in a document, with each tag having a delete button. A user clicks on the delete button in a tag in the middle of the tag list. When the tag is deleted, focus is placed onto the tag that was before the now-deleted tag.
:::

:::note
This is also quite useful when moving between pages but this would usually have to be done by the browser unless the user is in some process where that information is stored in a cookie or on the server between pages in the process.
:::
