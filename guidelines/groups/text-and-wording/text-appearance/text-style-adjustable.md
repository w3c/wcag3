---
needsAdditionalResearch: true 
status: developing
type: foundational
---

The presentation of each of the following :term[text] style properties can be adjusted, without loss of content or functionality, to meet the corresponding values for the content’s language, or, if the language is not listed in the table, of the language listed with the most similar orthography.

:::note
The requirement is that the text is manipulable and the style attributes can be overridden.
:::

:::except-when
* the text style property is hard-coded, such as raw text that is capitalized or hyphenated.
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
       <th scope="row">Automatic end-of-line hyphenation</th>
       <td></td>
       <td></td>
       <td>Disabled</td>
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
1. Apply the highest level of change of each attribute from the table, for the closest language.
2. Check that the text is changed by the override. 

<b>Expected results</b>
* #2 is true.
:::
