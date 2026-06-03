---
title: Sign language is available for prerecorded audio
provisions:
  - sign-language-prerecorded
---

The rule checks that sign language interpretation using the most appropriate regional sign language is available for prerecorded audio content. 

## Applicability

This rule applies to any page/view in which there is audio content. This includes audio in video and audio only content. It does not include audio content that is an alternative for visual content and clearly labelled as such.

## Expectation

Each test target includes sign language interpretation.

## Examples

### Passed example 1

Providing sign language interpretation for audio only content with associated video. The signed video is included within an HTML container that also includes the associated audio.

```html
  <figure>
  <figcaption>Latest podcast</figcaption>
  <audio controls src=”latest-podcast.mp3”></audio>
    <details>
      <summary>Signed version</summary>
      <video controls width="250">
        <source src="latest-podcast-signed.webm" type="video/webm" />
      </video>
    </details>
  </figure>
```

### Passed example 2

Providing an adjacent link to a video with sign language interpretation for audio only content.

```html
  <h3>Latest podcast</h3>
  <p>
    <audio controls src="latest-podcast.mp3"></audio><br/>
    <a href="latest-podcast-signed.html">Signed version of latest podcast</a>
  </p>
```

### Passed example 3

Sign language interpretation is part of the source video either because the interpreter is in the picture with the speaker or the interpreter is provided as hard-coded picture-in-picture.

### Failed example 1

The audio only content has no link to a video with sign language interpretation within the page/view.

```html
  <h3>Latest podcast</h3>
  <p>
    <audio controls src="latest-podcast.mp3"></audio>
  </p>
```

### Failed example 2

The audio only content has a link to a video with sign language interpretation within the page/view. The sign language used for the interpretation is not the most appropriate for the region of the website.

```html
  <html lang=”en-GB”>
  …
  <h3>Latest podcast</h3>
  <p>
    <audio controls src="latest-podcast.mp3"></audio>
    <a href="latest-podcast-ASL-signed.html">American Sign Language (ASL) signed version of latest podcast</a>
  </p>
```