---
status: developing
type: foundational
---

:term[Biometric] identification is not the only way to identify or authenticate.

:::note
Biometrics includes facial recognition software, fingerprinting, vocal patterns and other voice characteristics.
:::

:::note
Methods &amp; best practices

- Method: When requiring biometric information for authentication, provide an additional way to authenticate that is not biometric. For example, if a finger print is required for authentication, then a password must also be supported.
:::

:::tests
**Procedure**

For each method of biometric user authentication:
1. Check that there is at least one other method of non-biometric authentication.

**Expected results**
- #1 is true.
:::