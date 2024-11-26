---
layout: outcome.html
---

## Goal

A user is provided  an understandable description of the information or functionality contained within an image.
If there is no information conveyed by the image, the user's assistive technology should be able to ignore the image.

## Normative text

<div class="normative">

### Guideline

  <p>{{ outcome.description }}</p>

<div class="nested">

### Foundational Requirements

1. Would removing the image impact how people understand the page? (Prerequisite)
   1. No, [decorative images are programmatically hidden](methods/decorative-images). Stop.
   2. Yes, continue.

2. Is the image presented in a way that is available to user agents and assistive technology? (Prerequisite)
   1. Yes, image must meet _Image is programmatically determinable_ AND the _accessibility support set_ incorporates [Equivalent text alternatives are available for images that convey content](methods/equivalent-text-alternative). Stop.
   2. No, continue.

3. Is an equivalent text alternative available for the image? (Baseline)
   1. Yes, image must meet [Equivalent text alternatives are available for images that convey content](methods/equivalent-text-alternative). Stop.
   2. No, fail.

</div>

### Supplemental Requirements

- [The role and importance of images are programmatically indicated](methods/role-of-images).
- [The type of image (photo, icon, etc.) is indicated](methods/type-of-image).
- [Auto generated text descriptions are editable by content creator](methods/editable-alt-text).

### Assertions

- [Text alternatives follow an organizational style guide](methods/text-alt-styleguide).

</div>

## What to do

<div class="nested">

The general way to determine whether an image is conveyed appropriately is to:

1. Remove, hide, or mask the image.
2. Replace it with the text alternative.
3. Check that the meaning is substantively equivalent 
    1. the purpose of the non-text content is met by the text alternative.
    2. The way the content is presented is using the most appropriate, accessibility-supported  (math, code samples, etc.)
4. If the non-text content contains words that are important to understanding the content, the words are included in the text alternative.
5. If the non-text content duplicates adjacent text, the alternative may be null.

</div>

## Definitions

* **Image** - a visual representation of something.
* **Equivalent to the image** - text or audio which serves an equivalent purpose to what presenting the image achieves. Where text is embedded in an image that text is included in the equivalent unless it is incidental text from a photo (e.g. a street sign in a photo of a town). 
* **Decorative image** - serving only an aesthetic purpose, providing no information, and having no functionality Removing the image would not affect the meaning or function of the page.
* **Complex image** - an image which requires more than one or two sentences to describe the contents.
* **Text** - a sequence of characters that can be programmatically determined, where the sequence is expressing something in human language.