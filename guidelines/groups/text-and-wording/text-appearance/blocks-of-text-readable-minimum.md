---
needsAdditionalResearch: true 
status: developing
type: foundational
title: Blocks of text readable (minimum)
---

The default/authored presentation of :term[blocks of text] meets the corresponding values for the :term[content]'s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

:::note
<a href="https://en.wiktionary.org/wiki/orthography#Noun">Orthography</a> refers to how a language is represented in :term[text]. This requirement establishes minimal readability criteria for an initial set of orthographies.
:::

:::ednote
The metrics in the following table are still to be determined; the current content is an example.
:::

<table class="data">
 <thead>
   <tr>
     <th scope="col">Characteristic</th>
     <th scope="col">Arabic</th>
     <th scope="col">Chinese</th>
     <th scope="col">English</th>
     <th scope="col">Hindi</th>
     <th scope="col">Russian</th>
   </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">Inline margin</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
    <tr>
       <th scope="row">Block margin</th>
       <td></td>
       <td></td>
       <td>≥0.5em around paragraphs</td>
       <td></td>
       <td></td>
     </tr>  
     <tr>
       <th scope="row">Line length</th>
       <td></td>
       <td></td>
       <td>30-100 characters</td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Line height</th>
       <td></td>
       <td></td>
       <td>1.0 - paragraph separation height</td>
       <td></td>
       <td></td>
     </tr>
    </tbody>
</table>

:::note
[Blocks of text readable (minimum)](#blocks-of-text-readable-minimum) and [Text style readable (minimum)](#text-style-readable-minimum) are based on common usage, and their adjustable and enhanced counterparts are based on readability research. We need more readability research in these languages.
:::

:::tests

<b>Procedure</b>

For each block of text:
1. Check that the attributes of the block of text are within the attributes in the table for the closest language.

<b>Expected results</b> 
* #1 is true.
:::
