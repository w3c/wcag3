---
layout: requirement.html
level: foundational
text: A custom focus indicator is used with sufficient size, change of contrast, adjacent contrast, distinct style and adjacency.
---

## Methods

There are various ways of creating a focus indicator, the following techniques provide custom ways of creating and testing each category of focus indicator.

- [Line or bounding box indicators](#line-or-bounding-box-indicators)
- [Change of color](#change-of-color)
- [Icon/shape](#iconshape)
- [Tooltip/additional content](#tooltipadditional-content)
- [Size change](#size-change)
- [Combination indicators](#combination-indicators)
- [Other indicators](#other-indicators)

<a name="line-or-bounding-box-indicators">

### Line or bounding box indicators
</a>

<p class="technology"><span>Technology: </span> HTML</p>

A bounding box focus indicator using outline, border or box-shadow.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable]. 
    * <p class="ednote">We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.</p>
    * <p class="note">Text within a control is not considered part of the size metric.</p>

* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
    *  <p class="ednote">The contrast metric is to be determined, but assumed to be similar to a large-text level.</p>
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
    *  <p class="ednote">There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.</p>
    *  <p class="note">If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.</p>
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state. 
* Multiple controls: There must be at least 3 visible controls of the same style in the view/page.
    *  <p class="note">In order for a change of color to be used, there needs to be a basis for comparison, otherwise another method is needed.</p>
* **Adjacent:** The indicator is closer to the focused element than any other focusable element. (The center of the focused element to the center of the indicator.)


<a name="change-of-color">

### Change of color
</a>

The authored focus indicator uses a change of color within the control.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable]. 
    * <p class="ednote">We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.</p>
    * <p class="note">Text within a control is not considered part of the size metric. </p>
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
    * <p class="ednote">The contrast metric is to be determined, but assumed to be similar to a large-text level.</p>
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state. 
* Multiple controls: There must be at least 3 visible controls of the same style in the view/page.
    * <p class="note">In order for a change of color to be used, there needs to be a basis for comparison, otherwise another method is needed.</p>

<a name="icon-or-shape">

### Icon/shape
</a>

The authored focus indicator uses the addition/removal of an icon or shape.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable]. 
    * <p class="ednote">We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.</p>
    * <p class="note">Text within a control is not considered part of the size metric.</p>
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
    * <p class="ednote">The contrast metric is to be determined, but assumed to be similar to a large-text level.</p>
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
    * <p class="ednote">There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.</p>
    * <p class="note">If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.</p>

<a name="tooltip-or-additional-content">

### Tooltip/additional content
</a>

Display a tooltip to indicate the user interface component with focus.

* **Sufficient Size:** The thickness/length of the focus indicator change is [a sufficient size to be noticeable]. 
    * <p class="ednote">We will use a metric of 2px of the perimeter -20% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.</p>
    * <p class="note">Text within a control is not considered part of the size metric.</p>
* **Change of contrast:** The contrast change of the pixels that indicate the keyboard focus is [sufficient] in a) standard mode, b) dark mode, and  c) high contrast mode.
    * <p class="ednote">The contrast metric is to be determined, but assumed to be similar to a large-text level.</p>
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
    * <p class="ednote">There is a relationship between the area of the focus indicator and contrast that will need to be clarified. E.g. a higher contrast area may not need to be as large.</p>
    * <p class="note">If the focus indicator is adjacent to the focusable element and does not contrast with the element, it can use the <a href="#size-change">Size change</a> method.</p>

<a name="size-change">

### Size change
</a>

A change of size of the focusable element to show focus.

* **Sufficient Size:** The discernable area of the focus indicator change is [sufficient to be noticeable]
    * <p class="ednote">We will use a metric of 10% as a starting point. This metric needs usability testing, please get in touch if you could help facilitate this.</p>
    * <p class="note">“discernable area” means the focused element has a discernible border or background, it cannot just be text.</p>
    * <p class="note">Text within a control is not considered part of the size metric.</p>
* **Contrast:** The contrast change of the pixels that indicate the keyboard focus is sufficient in a) standard mode, b) dark mode, and c) high contrast mode

<a name="combination-indicators">

### Combination indicators
</a>

If an indicator uses a combination of techniques, one of those techniques must meet the test.

<a name="other-indicators">

### Other indicators
</a>

Using a custom indicator that does not fit into any other method.

* **Sufficient Size:** The thickness/length of the focus indicator change is sufficient to be noticeable (metric TBC, use 2px perimeter of the (visually apparent) control as the default, should be relative to the visual size of the control.)
    * <p class="note">Add the complexity of the adjacent contrast vs size of indicator. </p>
* Change of contrast: The contrast change of the pixels that indicate the keyboard focus is sufficient in a) standard mode, b) dark mode, and  c) high contrast mode.
* **Adjacent Contrast:** The focus indicator has sufficient contrast with the adjacent colors in a) standard mode, b) dark mode, and c) high contrast mode
    * <p class="note">There is a relationship between the area of the focus indicator and contrast that will need to be clarified.</p>
    * <p class="note">If the focus indicator is adjacent to the focusable element and does not contrast with the element, it may pass via “size change” below.</p>
* **Distinct Style:** The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state. 
* **Adjacent:** The indicator is closer to the focused element than any other focusable element. (The center of the focused element to the centre of the indicator.)