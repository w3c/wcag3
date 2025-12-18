---
status: developing
type: foundational
title: Decorative image 
---

:term[Decorative] :term[images] are :term[programmatically] hidden.

:::ednote
* Method: Ensure that a purely decorative image has no accessible name.
* Best practice: Provide a text alternative for a decorative image unless it is purely decorative.
* User needs:
  * As a user without vision or a user who has low vision, I need to know if an image is decorative or informative, so I can decide whether or not I want to interact with it.
  * As a user with a cognitive or memory disability, I would like to know whether an image is decorative or informative, so I can decide whether or not I want to interact with it even if it is decorative.
  * As a user who lost my sight later in life, I would like to get the description of the image even if it is decorative.
* Need to discuss how to distinguish "purely decorative" from "decorative"so that different testes would agree. 
  * "Purely decorative" images don't need text alternatives at all, but text alternatives for "decorative" images can be useful for some users if provided so that users can picture the image.
  * Examples of "purely decorative images": icon used alongside text, thumbnail image within a link, etc.
  * Examples of "decorative images": image photo, illustration, etc.
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
