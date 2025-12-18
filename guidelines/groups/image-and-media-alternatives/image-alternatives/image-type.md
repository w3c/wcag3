---
status: exploratory
type: supplemental
---

The :term[image types] (photo, icon, etc.) are indicated.

:::ednote
[Image type (Exploratory to Developing) - A document the subgroup has been working on](https://docs.google.com/document/d/1tEVoCFxYQ3G355VWpV30jry_QzicscqjPvoo7SvpWJc/edit?usp=sharing)

<b>User need(s)</b>
* As a user without vision, I need to know the image type. 
  * Screen readers just tell me that it is an image or a graphic. I have no idea on the type; a photograph, an illustration or anything else.
  * An image on a shopping site is identified as a photograph so that I can ask somebody to see and describe the photograph for me if I want.
  * An image on a website is identified as a headshot and the text alternative describes “headshot of Mr. Ichiro Suzuki” so that I can imagine the web page has a headshot of Ichiro Suzuki on it.
* As a user with low vision who can see a screen but also uses a screen reader, I want to perceive the image type when I have a difficulty seeing the image.

<b>Need to define “image types”</b>
Specific type(s) of an image to be identified in the text alternative where appropriate. It allows users to perceive what kind of image it is even if a user can’t see the image or has difficulty seeing the image. 

<b>Note</b>
 For web pages, screen readers will tell a user that it is an image or a graphic when they encounter <img> or any other elements with role=”img” in the HTML code. But a user has no idea on what type of image it is.
:::

:::except-when
* An image is a link or a part of a link
* An image is a button or a part of a button
* An image is "purely" decorative (e.g. Icons used alongside text)
:::

:::example
Examples of the types include, but not limited to:
* Photograph
* illustration
* Chart
* Infographic
* Map
* Graph
* Screenshot
* Headshot
* Diagram
:::

:::tests
<b>Procedure</b>
For each image:
1. Check if the image is not a link, a button, any other interactive element nor purely decorative.
2. Check that the image type is described by the text alternative.

<b>Expected results</b>
* #2 is true. 
:::
