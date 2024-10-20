---
subtitle: Tests
---

* **Sufficient Size:** The thickness/length of the focus indicator change is sufficient to be noticeable (metric TBC, use 2px perimeter of the (visually apparent) control as the default, should be relative to the visual size of the control.)
    * Note: Add the complexity of the adjacent contrast vs size of indicator. 
* Change of contrast: The contrast change of the pixels that indicate the keyboard focus is sufficient in a) standard mode, b) dark mode, and  c) high contrast mode.
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
    * Note: There is a relationship between the area of the focus indicator and contrast that will need to be clarified
    * There is a relationship between sufficient size and adjacent contrast as well when the contrast is the same between the indicator and adjacent item
    * If the focus indicator is adjacent to the focusable element and does not contrast with the element, it may pass via “size change” below.
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state. 
* **Adjacent:** The indicator is closer to the focused element than any other focusable element. (The center of the focused element to the centre of the indicator.)
