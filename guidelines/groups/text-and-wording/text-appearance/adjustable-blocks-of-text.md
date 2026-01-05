---
needsAdditionalResearch: true 
status: developing
type: foundational
---

The presentation of :term[blocks of text] can be adjusted, without loss of content or functionality, to meet the corresponding values for the :term[content]'s language, or where that language is not listed in the table, for the language listed with the most similar orthography.

:::note
The requirement is that the text is manipulable and the style attributes can be overridden.
:::

:::applies-when
Text is presented.
:::

:::except-when
The content is hard-coded (e.g., the raw text is capitalized or hyphenated).
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
       <th scope="row">Block Margin</th>
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
       <td>Not applicable</td>
       <td>Left aligned</td>
       <td></td>
       <td></td>
     </tr>
    </tbody>
</table>

:::note

[Readable blocks of text (minimum)](#readable-blocks-of-text) and [Readable text style (minimum)](#readable-text-style) are based on common usage, and their adjustable and enhanced counterparts are based on readability research. We need more readability research in these languages.
:::

:::tests

Procedure

For each piece of text:
1. Apply the highest level of change of each attribute from the table, for that language/script.
2. Check that the text is changed by the override. 

Expected results
* #2 is true.
:::
