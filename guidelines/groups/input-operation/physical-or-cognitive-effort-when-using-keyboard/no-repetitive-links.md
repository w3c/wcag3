---
status: developing
type: supplemental
---

Repetitive adjacent links that have the same destination are avoided.

:::ednote
Supplemental if applicable to all :term[content], else best practice.
:::

:::note
A common pattern is having a :term[component] that includes a linked image and some linked :term[text], where both links go to the same content. Someone using screen reading software can be disoriented from the unnecessary chatter, and a keyboard user has to navigate through more tab stops than should be necessary. Combining adjacent links that go to the same content improves the user experience.
:::

:::note
Methods &amp; best practices

- Method: When repetitive links are used, remove them from the focus and reading order.
- Method: Use a single link instead of multiple links to the same destination.
- Best practice: Combine repetitive links into a single interactive element.
:::

:::tests
**Procedure**

For set of adjacent links that go to the same destination:
1. Check that only one of the links is in the focus and reading order.

**Expected Results**
- #1 is true.
:::