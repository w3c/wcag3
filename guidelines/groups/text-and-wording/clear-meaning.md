---
children:
  - detectable-text
  - unambiguous-text
status: developing
---

Users can access explanations of or alternatives to ambiguous :term[text] :term[content].

:::decision-tree
For each item of ambiguous text, such as :term[non-literal text], abbreviations and acronyms, :term[ambiguous numbers], or text missing letters or diacritics:
1. Is the text presented in a way that is available to :term[user agents], including assistive technology (AT)?
   - Yes, view meets <a href="#detectable-text">Text is programmatically determinable</a>, continue.
   - No, continue to step 3.
2. Does the :term[accessibility support set] meet <a href="#unambiguous-text">Explain ambiguous text or provide an unambiguous alternative</a>?
   - Yes, pass. Stop.
   - No, continue.
3. Does the author meet <a href="#unambiguous-text">Explain ambiguous text or provide an unambiguous alternative</a>?
   - Yes, pass. Stop.
   - No, fail.

**Exception**

- If the purpose is to showcase works of art or fiction, such as a poetry journal or fictional stories, this guideline does not apply. However, if the purpose is to educate students about art or fiction, then this guideline applies.
:::
