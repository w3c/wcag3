---
type: supplemental
status: developing
---

A visual and programmatically available mechanism exists that allows users to return to the :term[starting point] of the product.

:::except-when
* The :term[page]/:term[view] is the starting point of the product.
* It is essential to the functionality not to provide this mechanism.
:::

:::note
Where the product is a sub-product then the starting point should be the sub-product starting point. For example, an organization's careers website that is separate from the main website.
:::

<div class="issue" data-number="448"></div>

:::tests
<i>HTML homepage link</i>

<b>Procedure</b>
1. Select and view a website's page other than the homepage.
2. Examine the source code of the HTML document.
3. Verify that there is a link that points to the website's starting point.

<b>Expected Results</b>
* #3 is true
:::