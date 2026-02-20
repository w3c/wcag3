---
needsAdditionalResearch: true 
status: developing
type: foundational
title: Text style readable (minimum)
---

The default/authored presentation of :term[text] style property meets the corresponding values for the :term[content]'s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

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
       <th scope="row">Font face</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
    <tr>
       <th scope="row">Font size</th>
       <td></td>
       <td></td>
       <td>Vertical viewing angle of ≥0.2° (~10pt at typical desktop viewing distances)</td>
       <td></td>
       <td></td>
     </tr>  
     <tr>
       <th scope="row">Font width</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Text decoration</th>
       <td></td>
       <td></td>
       <td>Most text is not bold, italicized, and/or underlined</td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Letter spacing</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Capitalization</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">End-of-line hyphenation</th>
       <td></td>
       <td></td>
       <td>Don't hard-code in the raw text.</td>
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
