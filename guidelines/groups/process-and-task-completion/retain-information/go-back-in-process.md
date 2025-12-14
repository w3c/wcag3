---
status: exploratory
---

In a multi-step :term[process], the interface supports stepping backwards in a process and returning to the current point without data loss.

**Except when**

- It is :term[essential] that the user cannot step back in a process.

:::example
Certain tests may require that the user cannot go back through previously-submitted responses and change them.
:::