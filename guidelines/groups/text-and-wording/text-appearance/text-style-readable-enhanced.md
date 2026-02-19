---
needsAdditionalResearch: true 
status: developing
type: supplemental
title: Text style readable (enhanced)
---

The default/authored presentation of :term[text] style properties meets the corresponding values for the :term[content]'s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

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
       <td>Vertical viewing angle of ≥0.24° (~12pt at typical desktop viewing distances)</td>
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
       <td>
        <ul>
          <li>Most text is not bold, italicized, and/or underlined</li>
          <li>Text is not bold and italicized at the same time</li>
          <li>Underlines are only used for links</li>
        </ul>
       </td>
       <td></td>
       <td></td>
     </tr>
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
       <th scope="row">Hyphenation</th>
       <td></td>
       <td></td>
       <td></td>
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
1. <b>HTML:</b> Check CSS to confirm that relevant style attributes (such as font size and letter spacing) are set within the designated values for the text’s language.
2. <b>Non-web apps:</b> Check GUI toolkit settings (or defaults) to confirm that they apply values within the designated range. 

<b>Expected results</b>
* #1 or #2 is true.
:::

