---
layout: outcome.html
---

## Goal

To help people understand text:
* Use clear, unambiguous language, or 
* Explain the implied meaning of ambiguous language.

This guideline covers four types of ambiguous text content:
* **non-literal text**, such as idioms, metaphors, similes, and sarcasm,
* **abbreviations or acronyms** that are not defined on first use,
* **ambiguous numbers**, such as date formatting that can have different meanings in different cultures, and
* **text that leaves out letters or diacritics** needed to read the words phonetically, such as in Arabic and Hebrew.

For each instance of ambiguous text content, the goal is to ensure clarity and provide necessary context.

Making ambiguous content (including non-literal or figurative language) easier to understand helps people with cognitive disabilities as well as neurodivergent people, such as those who are autistic and may be so focused on the literal meaning that they may not notice the implied meaning.

Explaining or avoiding ambiguous language can also help:
* Non-native language speakers
* People of different ages or generations
* People from different cultural backgrounds

## Normative text

<div class="normative">

### Guideline

<p>{{ outcome.description }}</p>

<div class="nested">

### Foundational Requirements

For each item of ambiguous text, such as non-literal text, abbreviations and acronyms, ambiguous numbers, or text missing letters or diacritics:

1. Is the ambiguous text presented in a way that is available to user agents, including assistive technology (AT)?
   1. Yes, view meets *Text is programmatically determinable*, continue.
   2. No, continue to step 3.
2. Does the *accessibility support set* meet [Explain ambiguous text or provide an unambiguous alternative](unambiguous-text/)?
   1. Yes, pass. Stop.
   2. No, continue. 
3. Does the author meet [Explain ambiguous text or provide an unambiguous alternative](unambiguous-text/)?
   1. Yes, pass. Stop.
   2. No, fail.

#### Exceptions
* If the purpose is to showcase works of art or fiction, such as a poetry journal or fictional stories, this guideline does not apply; however, if the purpose is to educate students about pieces of art, then this guideline applies.

</div>

### Supplemental Requirements

<p class="ednote">None defined at this time.</p>

### Assertions

<p class="ednote">There will probably be a generic assertion based on style guides that applies to this guideline.</p>


</div>

## What to do

<div class="nested">

Determine if the text has words or phrases that:
* Hint at a meaning that is not directly stated, or
* Can have more than one meaning, such as working on a literal and figurative level at the same time. Example in English: “The chef cuts corners when slicing the fish.” Non-literal: The chef is preparing the fish in an easy or cheap way. Literal: The chef is cutting the fish into shapes that don’t have sharp corners.  

When checking for ambiguous text, also consider how sentences are combined together, such as if a word in one sentence is critical to accurately understanding the meaning of a later sentence. 

If the text has implied meaning, explain it or provide an unambiguous alternative using one of the techniques in the [Methods](.methods/) section.

</div>

## Definitions

- **Abbreviation**: TBD (a shortened form of a word or a phrase).
- **Acronym**: TBD (a type of abbreviation formed from the initial letters of other words, often pronounced as a word).
- **Ambiguous number**: TBD (such as when date formatting can have different meanings in different cultures).
- **Ambiguously pronounced text**: TBD (including words that leave out letters or diacritics needed to read the words phonetically, such as in Arabic and Hebrew.)
- **Back translation** is a two-step process of translating text into another language and then back to its original language. Also called reverse translation, this process can help identify phrases that may lose their intended meaning when translated. 
- **Diacritic**: TBD, (a sign, such as an accent or other type of glyph, when added above or below a letter indicates a difference in pronunciation from the same letter when unmarked or marked differently) such as in Arabic and Hebrew.
- **Emoji character** An emoji character is a small digital image with Unicode for its literal meaning, such as 🌴(“Palm tree”). But emojis often have implied meaning that users may need help understanding. Common examples of emojis used in non-literal ways:
  -  💯(“Hundred points”) can be used in various ways, such as to indicate a perfect score or complete agreement. 
  - 🙃 (“Upside-down face”) is often used to indicate sarcasm or silliness.
- **Literal text** uses the direct meaning of words to convey exactly what is written. Unlike non-literal or figurative language, literal text does not have implied meaning. 
- **Non-literal text** uses words or phrases in a way that goes beyond their standard or dictionary meaning to express deeper, more complex ideas. This is also called figurative language. To understand it, users have to interpret the implied meaning behind the words, rather than just their literal or direct meaning.
  - Examples: Allusions, hyperbole, idioms, irony, jokes, litotes, metaphors, metonymies, onomatopoeias, oxymorons, personification, puns, sarcasm, and similes. More detailed examples are available in the [Methods](.methods/) section.
- **Publisher** The individual or organization responsible for curating, producing, and distributing various forms of content to engage and inform audiences. Includes tools used by the publisher such as HTML and JSON and content management systems like Wix and WordPress. 
- **User agent** W3C defines user agent as any software that retrieves, renders, and facilitates end-user interaction with Web content, or whose user interface is implemented using Web technologies. 
    - Examples: Web browsers, media players, operating system shells, plug-ins, consumer electronics with Web-widgets, and stand-alone applications or embedded applications that help in retrieving, rendering, and interacting with Web content. 