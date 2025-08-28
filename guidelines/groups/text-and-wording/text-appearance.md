---
children:
  - readable-blocks-of-text
  - readable-text-style
  - adjustable-blocks-of-text
  - adjustable-text-style
  - content-and-functionality-not-lost-with-text-adjustment
  - readable-blocks-of-text-supplemental
  - readable-text-style-supplemental
---

Users can read visually rendered :term[text].

:::decision-tree
For each word of text:
1. Is the text purely :term[decorative] or, is it not readable by anybody?
   - Yes, Pass
   - No, Continue
2. Does the default/authored presentation meet minimum :term[requirements]?
    1. Yes, the default/authored presentation meets <a href="#readable-blocks-of-text">Readable Blocks of Text (foundational)</a> and <a href="#readable-text-style">Readable Text Style (foundational)</a>, Continue
    2. No, Fail
3. Can the text appearance be adjusted by the user?
    1. Yes, text must be :term[user-manipulable text] and:
        1. The :term[accessibility support set] meets:
            1. <a href="#adjustable-blocks-of-text">Adjustable blocks of text</a>
            2. <a href="#adjustable-text-style">Adjustable text style</a>
        2. <a href="#content-and-functionality-not-lost-with-text-adjustment">Content and functional are not lost with text adjustment</a>
        3. Pass
    2. Yes, via produce-provided themes:
        1. <a href="#adjustable-blocks-of-text">Adjustable blocks of text</a>
        2. <a href="#adjustable-text-style">Adjustable text style</a>
        3. <a href="#content-and-functionality-not-lost-with-text-adjustment">Content and functional are not lost with text adjustment</a>
        4. Pass
    3. No, and the :term[product] does not provide its own themes:
        1. Fail.

:::