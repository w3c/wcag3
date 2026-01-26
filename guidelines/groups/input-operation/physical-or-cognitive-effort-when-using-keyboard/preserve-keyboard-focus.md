---
status: developing
type: foundational
---

When :term[keyboard focus] moves from one context to another within a :term[page]/:term[view], whether automatically or by user request, the keyboard focus is preserved so that, when the user returns to the previous context, the keyboard focus is restored to its previous location unless that location no longer exists.

:::example
When a user closes a modal dialog or other popup, keyboard focus is returned to the element that caused the dialog or popup to open.
:::

:::note
When the previous focus location no longer exists, best practice is to put focus on the focusable location just before the one that was removed. An example of this would be a list of subject-matter tags in a document, with each tag having a delete button. A user clicks on the delete button in a tag in the middle of the tag list. When the tag is deleted, focus is placed onto the tag that was before the now-deleted tag.
:::

:::note
This is also quite useful when moving between pages but this would usually have to be done by the browser, unless the user is in some :term[process] where that information is stored in a cookie or on the server between pages in the process so that it still has the old location when the person returns to the page.
:::

:::tests
**Procedure**
1. Check that all places where you can move to a new context within a web page (e.g. pop up or expansion), when you exit you are at the same location as when you triggered the move to the new context.

**Expected results**
- #1 is true
:::