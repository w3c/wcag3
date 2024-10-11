---
layout: layout/methods.md
---

## Decision tree

The approach to a text alternative depends on the type of image and how it is used.

The following decision tree is used to determine the appropriate method. 

For each image:

<div class="nested">

1. Would removing the image impact how people understand the page?
   1. No, see [decorative images](decorative-images) [stop]
   2. Yes, continue

2. Can a concise and plain-text description provide an equivalent to the image?
   1. No, see [complex images](complex-images/) [stop]
   2. Yes, continue

3. Is the image part of a control?
   1. Yes, see [control images](control-images/) [stop]
   2. No, continue

4. Are there multiple images which are all views of one object?
   1. Yes, see [multiple images](multiple-images/) [stop]
   2. No, continue

5. Does the image use another method of providing an alternative?
   1. Yes, see [equivalent alternative text](equivalent-alternative-text) pass [stop]
   2. No, fail [stop]

</div>