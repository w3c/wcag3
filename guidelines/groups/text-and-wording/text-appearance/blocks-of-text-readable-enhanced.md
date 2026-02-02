---
needsAdditionalResearch: true
status: developing
type: supplemental
title: Blocks of text readable (enhanced)
---

The default/authored presentation of :term[blocks of text] meets the corresponding values for the :term[content]'s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

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
       <td></td>
       <td></td>
       <td></td>
     </tr>  
     <tr>
       <th scope="row">Line length</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Line height</th>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Justification</th>
       <td></td>
       <td></td>
       <td>Left aligned</td>
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
1. <b>HTML:</b> Check CSS to confirm that relevant style attributes (such as line height, letter spacing, word spacing, text align) are set within the designated values for the text’s language.
2. <b>Non-web apps:</b> Check GUI toolkit settings (or defaults) to confirm that they apply values within the designated range.

<b>Expected results</b>
* #1 or #2 is true.
:::
