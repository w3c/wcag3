---
title: Methods
layout: layout/methods.md
---

## Decision tree

For each focusable item:

<div class="nested">

1. Is there a focus indicator?
    1. Yes, continue
    2. No, fail

2. Does the organization have a style guide which includes guidance on all types of text-alternatives, and a policy that editors are required to follow the style guide?
    1. Yes, See Text Alternative Style Guide Assertion  (Enhanced), continue
    2. No, continue

3. Is the user agent default focus indicator used? (Prerequisite)
    1. Yes, see [using the default indicators](default-focus-indicator/) (continue)
    2. No, continue

4. Is the user agent default focus indicator used, and meets contrast across backgrounds? (Baseline)
    1. Yes, see [using the default focus indicator and checking contrast](default-focus-indicator-check-contrast/) (stop)
    2. No, continue

5. Is the indicator using lines or a bounding box? (Baseline)
    1. Yes, see [line / bounding box indiators](line-box-indicators) (stop)
    2. No, continue

6. Does the indicator use a change of color of the element? (Baseline)
    1. Yes, [change of color](see change-of-color/) (stop)
    2. No, continue

7. Does the indicator use an icon or shape as the indicator? (Baseline)
    1. Yes, see [icon/shape](icon-shape/) (stop)
    2. No, continue

8. Does the indicator use a tooltip or additional content as the indicator? (Baseline)
    1. Yes, see [tooltip/additional content](tooltip-additional-content/).<br>
        Is there a supplementary indicator? (Enhanced)
        1. Yes, see [supplementary indicators](supplementary-indicators/) (stop)
        2. No, continue
    2. No, continue

9. Does the indicator use a change of size of the focusable element as the indicator? (Baseline)
    1. Yes, see [size change](size-change/) (stop)
    2. No, continue

10. Does the indicator use a combination of the above indicators?
    1. Pick one of the methods above to meet conformance (stop)
    2. No, continue

11. Does the indicator use another method? (Baseline)
    1. Yes, see [other indicators](other-indicators/) (stop)

</div>