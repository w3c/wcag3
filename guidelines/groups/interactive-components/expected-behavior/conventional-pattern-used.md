---
status: developing
type: assertion
---

[Title, role, or organization] asserts that:

- A review has been conducted and changes made (when necessary) to ensure that :term[Components] follow established conventions:
  - Each component follows applicable platform conventions for how users interact with that type of component.
  - If a component library is used, then each component in the library: 
    - is tested for accessibility before being used
    - follows applicable platform conventions for how users interact with that type of component

::assertion-required

- Title, role or organization making the assertion (if different from the conformance claim).
- Date of when the review was completed.
- Date of assertion (if different from the date of the conformance claim).

::assertion-recommended

- Results from the review.
- Process or policy for maintaining the review.

:::note
A component library specifies a set of standardized components used in a product or products. It can include code to use, but at a minimum would define how the component is used and define pointer, keyboard, and assistive technology interactions.

Using a component library can help larger teams and organizations provide a consistent experience. 

Examples of component libraries include [GDS](https://design-system.service.gov.uk/components/), [Carbon Design System](https://www.carbondesignsystem.com/), and [Lion](https://lion.js.org/).

Examples of platform patterns are [ARIA Platform Authoring Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) (web), [Apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/components), and [Android Material Design](https://m2.material.io/components?platform=android).
:::
