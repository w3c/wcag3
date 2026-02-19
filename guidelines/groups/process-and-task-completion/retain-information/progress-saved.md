---
status: developing
type: supplemental
---

Data entry and other task completion :term[processes] allow saving and resuming from the current step in the task.

:::except-when
- The task completion is part of a real-time event (for example, an auction or concert ticket purchase), and no alternative to the time limit is possible.
:::

:::tests
<b>Procedure</b>

For any processes that require the user to enter information:
1. Log in, if needed, and begin the timed activity.
2. Allow the session to time out.
3. Submit or save the data.
4. Log out if logged in.
5. Re-authenticate and log back in.
6. Check that the process can continue from where you left off and be completed without loss of data, including the original data and any changes made after re-authentication.
7. Check that the process used to save the information submitted in step 3 is not stored on the server. (Note: This requires knowledge of the technology and features used to implement the technique.)

<b>Expected results</b>
* #7 is true.
:::