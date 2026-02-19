---
status: developing
type: foundational
---

:term[Decorative] images are :term[programmatically] hidden.

:::tests
<i>(General) No accessible name</i>

<b>Procedure</b>

1. Check for any images that add no information to the content.
2. Check that the image has no accessible name.

<b>Expected results</b>
* #2 is true.

<i>(HTML) Using an empty `alt` attribute for an `image` element</i>

<b>Procedure</b>

For any image that adds no information to the content:
1. Check that `title`, `aria-label`, `aria-labelledby` etc. is either absent or empty.
2. Check that an `alt` attribute is present and empty.

<b>Expected results</b>
* #1 is true.
* #2 is true.
:::
