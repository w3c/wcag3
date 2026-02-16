---
type: foundational
status: exploratory
---

Authentication does not rely solely on a single type of :term[biometrics].

:::ednote
Methods & best practices
* Method: When requiring biometric information for authentication, provide an additional way to authenticate (this may include using a different type of biometrics — for example, if a finger print is required for authentication, then voice authentication or a password must also be supported). 
:::

:::tests
<b>Procedure</b>

For each method of user authentication:
1. Check that there is at least one other method of authentication (biometric or non-biometric).

<b>Expected results</b>
* #1 is true.
:::
