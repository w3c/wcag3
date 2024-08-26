---
layout: layout/methods.md
---

## Decision tree

For each focusable item:

1. Is there a focus indicator?
    <ol type="a">
        <li>Yes, continue</li>
        <li>No, fail</li>
    </ol>

2. Does the organization have a style guide which includes guidance on all types of text-alternatives, and a policy that editors are required to follow the style guide?
    <ol type="a">
        <li>Yes, See Text Alternative Style Guide Assertion  (Enhanced), continue</li>
        <li>No, continue</li>
    </ol>

3. Is the user-agent default focus indicator used? (Prerequisite)
    <ol type="a">
        <li>Yes, see <a href="default-focus-indicator/">using the default indicators</a> (continue)</li>
        <li>No, continue</li>
    </ol>

4. Is the user-agent default focus indicator used, and meets contrast across backgrounds? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="default-focus-indicator-check-contrast">using the default focus indicator and checking contrast</a> (stop)</li>
        <li>No, continue</li>
    </ol>

5. Is the indicator using lines or a bounding box? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="line-box-indicators">line / bounding box indiators</a> (stop)</li>
        <li>No, continue</li>
    </ol>

6. Does the indicator use a change of color of the element? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="change-of-color/">change of color</a> (stop)</li>
        <li>No, continue</li>
    </ol>

7. Does the indicator use an icon or shape as the indicator? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="icon-shape/">icon/shape</a> (stop)</li>
        <li>No, continue</li>
    </ol>

8. Does the indicator use a tooltip or additional content as the indicator? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="tooltip-additional-content/">tooltip/additional content</a>.<br>
        Is there a supplementary indicator? (Enhanced)
        <ol type="i">
            <li>Yes, see <a href="supplementary-indicators/">supplementary indicators</a> (stop)</li>
            <li>No, continue</li>
        </ol></li>
        <li>No, continue</li>
    </ol>

9. Does the indicator use a change of size of the focusable element as the indicator? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="size-change/">size change</a> (stop)</li>
        <li>No, continue</li>
    </ol>

10. Does the indicator use a combination of the above indicators?
    <ol type="a">
        <li>Pick one of the methods above to meet conformance (stop)</li>
        <li>No, continue</li>
    </ol>

11. Does the indicator use another method? (Baseline)
    <ol type="a">
        <li>Yes, see <a href="other-indicators/">other indicators</a> (stop)</li>
    </ol>