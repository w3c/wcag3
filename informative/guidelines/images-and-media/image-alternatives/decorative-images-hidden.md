## Tests

### (General) No accessible name

<b>Procedure</b>

1. Check for any images that add no information to the content.
2. Check that the image has no accessible name.

<b>Expected results</b>
* #2 is true.

### (HTML) Using an empty `alt` attribute for an `image` element

<b>Procedure</b>

For any image that adds no information to the content:
1. Check that `title`, `aria-label`, `aria-labelledby` etc. is either absent or empty.
2. Check that an `alt` attribute is present and empty.

<b>Expected results</b>
* #1 is true.
* #2 is true.
