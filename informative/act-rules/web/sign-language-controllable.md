---
title: Sign language is controllable
provisions:
  - sign-language-controllable
---

The rule checks that sign language can be turned on and off. 

## Applicability

This rule applies to any audio-only content or video with audio content that includes sign language interpretation.

## Expectation

The test target has a control for the user to turn the sign language on or off. Except when the sign language is embedded or a part of the visible video itself.

## Examples

### Passed example 1

Show and hide sign language interpretation.

Content with audio includes a method to switch sign language interpretation on and off. 

```html
  <figure>
    <figcaption>Latest podcast</figcaption>
    <audio controls src="latest-podcast.mp3"></audio>
    <video id="sign-video" controls width="250" style="display:none">
      <source src="latest-podcast-signed.webm" type="video/webm" />
    </video>
    <button onclick="toggleSign()">Toggle sign language</button>
  </figure>

  <script>
    function toggleSign() {
      var sign-video = document.getElementById("sign-video");
      if(sign-video.style.display === "none") {
        sign-video.style.display = "block";
      } else {
        sign-video.style.display = "none";
      }
    }
  </script>
```

### Failed example 1

No way to switch sign language interpretation on or off.

Content with audio has no method to switch sign language interpretation on and off. 

```html
  <figure>
    <figcaption>Latest podcast</figcaption>
    <audio controls src="latest-podcast.mp3"></audio>
    <video controls width="250" style="display:none">
      <source src="latest-podcast-signed.webm" type="video/webm" />
    </video>
  </figure>
```