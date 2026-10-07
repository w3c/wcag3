## Tests

### HTML paragraph reflow without requiring scrolling in two dimensions

<b>Procedure</b>

For each page/view:
1. Set the viewport at 320 CSS pixels in the direction of text.
2. Identify all the blocks of text within the scope.
3. Check that each block of text does not require scrolling into two dimensions.
4. Check that the text in each block of text is legible.

<b>Expected results</b>
* #3 and #4 are true.