---
status: developing
type: foundational
title: Decorative image 
---

:term[Decorative] :term[images] are :term[programmatically] hidden.

:::ednote
* Method: Ensure that a purely decorative image has no accessible name.
* Best practice: Provide a text alternative for a decorative image unless it is purely decorative.
* Need to discuss how to distinguish "purely decorative" from "decorative". "purely decorative" images don't need text alternatives at all, but text alternatives for "decorative" images can be useful for some users if provided so that users can picture the image.
:::

:::tests
<i>(General) No accessible name</i>

<b>Procedure</b>
1. Check for any images that add no information to the content.
2. Check that the image has no accessible name.

<b>Expected results</b>
* #2 is true.

<i>(HTML) Using an empty `alt` attribute for an `image` element</i>

<b>Procedure</b>
1. Check for any images that add no information to the content.
2. Check that `title`, `aria-label`, `aria-labelledby` etc. is either absent or empty.
3. Check that an `alt` attribute is present and empty.

<b>Expected results</b>
* #2 is true.
* #3 is true.
:::
