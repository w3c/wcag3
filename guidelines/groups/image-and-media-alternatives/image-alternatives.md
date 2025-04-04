---
children:
  - decorative-image
  - equivalent-text-alternative
  - detectable-image
  - image-role
  - image-type
  - editable-alternatives
  - style-guide
howto: true
---

Users have equivalent alternatives for images.

:::decision-tree
For each :term[image]:
1. Would removing the :term[image] impact how people understand the page?
   - No, <a href="#decorative-image">Decorative image is programmatically hidden.</a> Stop.
   - Yes, continue.
2. Is the :term[image] presented in a way that is available to user agents and assistive technology?
   - Yes, :term[image] must meet <a href="#detectable-image">Image is programmatically determinable</a> AND the :term[accessibility support set] meets <a href="#equivalent-text-alternative">Equivalent text alternative is available for image that conveys content</a>. Stop.
   - No, continue.
3. Is an equivalent text alternative available for the :term[image]?
   - Yes, :term[image] must meet <a href="#equivalent-text-alternative">Equivalent text alternative is available for image that conveys content</a>. Stop.
   - No, fail.
:::
