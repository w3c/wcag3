---
needsAdditionalResearch: true 
status: developing
type: foundational
---

The presentation of each of the following font features can be adjusted, without loss of content or functionality, to meet the corresponding values for the content’s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

:::note
The requirement is that the text is manipulable and the style attributes can be overridden.
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
       <th scope="row">Underlining</th>
       <td></td>
       <td></td>
       <td>
        <ul>
          <li>Disabled entirely</li>
          <li>Enabled on links only</li>
          <li>Enabled on links and author defined :term[text]</li>
        </ul>
       </td>
       <td></td>
       <td></td>
     </tr>
    <tr>
       <th scope="row">Italics</th>
       <td></td>
       <td></td>
       <td>Disabled</td>
       <td></td>
       <td></td>
     </tr>  
     <tr>
       <th scope="row">Bold</th>
       <td></td>
       <td></td>
       <td>Disabled</td>
       <td></td>
       <td></td>
     </tr>
     <tr>
       <th scope="row">Font face</th>
       <td></td>
       <td></td>
       <td></td>
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
       <td>
        <ul>
          <li>Sentence case</li>
          <li>Title case (headings, titles), sentence case for all other text</li>
        </ul>
       </td>
       <td></td>
       <td></td>
     </tr>
    <tr>
       <th scope="row">Automatic hyphenation</th>
       <td></td>
       <td></td>
       <td>Disabled</td>
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

For each block of text:
1. Apply the highest level of change of each attribute from the table, for that language/script.
2. Check that the text is changed by the override. 

Expected Results
* #2 is true.
:::
