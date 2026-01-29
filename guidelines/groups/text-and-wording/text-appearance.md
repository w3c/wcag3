---
children:
  - blocks-of-text-readable-minimum
  - text-style-readable-minimum
  - text-contrast-sufficient-minimum
  - blocks-of-text-adjustable
  - text-style-adjustable
  - text-size-adjustable
  - text-color-adjustable
  - blocks-of-text-readable-enhanced
  - text-style-readable-enhanced
  - text-contrast-sufficient-enhanced
  - text-customizations-retained
---

Users can read visually rendered :term[text].

:::decision-tree
For each word of text:
1. Is the text purely :term[decorative] or, is it not readable by anybody?
   - Yes, Pass
   - No, Continue
2. Does the default/authored presentation meet minimum :term[requirements]?
    1. Yes, the default/authored presentation meets <a href="#blocks-of-text-readable-minimum">Blocks of text readable (minimum)</a> and <a href="#text-style-readable-minimum">Text style readable (minimum)</a>, Continue
    2. No, Fail
3. Can the text appearance be adjusted by the user without loss of content or functionality?
    1. Yes, text must be :term[user-manipulable text] and:
        1. The :term[accessibility support set] meets:
            1. <a href="#blocks-of-text-adjustable">Blocks of text adjustable</a>
            2. <a href="#text-style-adjustable">Text style adjustable</a>
        2. Pass
    2. Yes, via product-provided themes:
        1. <a href="#blocks-of-text-adjustable">Blocks of text adjustable</a>
        2. <a href="#text-style-adjustable">Text style adjustable</a>
        3. Pass
    3. No, and the :term[product] does not provide its own themes:
        1. Fail.

:::
