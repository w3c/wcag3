---
layout: layout/methods.md
---

## Decision tree

The approach to a text alternative depends on the type of image and how it is used.

The following decision tree is used to determine the appropriate method. 

For each image:

<div class="nested">

1. Would removing the image impact how people understand the page? (Prerequisite)
   1. No, image must meet [Decorative images](decorative-images) [stop]
   2. Yes, continue

2. Is the image presented in a way that is available to user agents and assistive technology? (Prerequisite)
   1. Yes, image must meet [@@@ programatic availability] image AND the [accessibility support set] incorporates [Equivalent alternative text](equivalent-alternative-text). [stop]
   2. No, continue

3. Is an equivalent text alternative available for the image? (Baseline)
   1. Yes, image must meet [Equivalent alternative text](equivalent-alternative-text) [stop]
   2. No, fail

</div>