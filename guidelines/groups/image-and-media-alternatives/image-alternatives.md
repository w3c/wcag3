---
children:
  - detectable-image
  - decorative-image
  - equivalent-text-alternative
  - image-type
  - editable-alternatives
  - style-guide
---

Users have equivalent alternatives for images.

:::decision-tree
For each :term[image]:
1. Would removing the image impact how people understand the :term[page]?
   - No, <a href="#decorative-image">Decorative image is programmatically hidden.</a> Stop.
   - Yes, continue.
2. Is the image presented in a way that is available to :term[user agents] and :term[assistive technology]?
   - Yes, image must meet <a href="#detectable-image">Image is programmatically determinable</a> AND the :term[accessibility support set] meets <a href="#equivalent-text-alternative">Equivalent text alternative is available for image that conveys :term[content]</a>. Stop.
   - No, continue.
3. Is an equivalent :term[text alternative] available for the image?
   - Yes, image must meet <a href="#equivalent-text-alternative">Equivalent text alternative is available for image that conveys content</a>. Stop.
   - No, fail.
:::
