---
title: Default sign language positioning does not hide visual content
provisions:
  - content-not-obscured-sign-language
---

The rule tests the default positioning of sign language interpretation to ensure it does not obscure critical interface elements or captions, even at small viewport sizes.

## Applicability

This rule applies to any audio only or video with audio content that includes sign language interpretation. The rule must be tested at the default viewport size and down to a viewport width of 320 CSS pixels. 

## Expectation

For each test target, at the tested viewport sizes, default positioning of sign language interpretation does not obscure critical interface elements or captions.

Where sign language interpretation is hard coded into video content the interpreter is not positioned in such a way to obscure other content within the video.

## Background

This rule supports the WCAG 3 outcome that content is not obscured by sign language. It ensures that users who rely on sign language interpretation are able to use the content when viewing sign language interpretation.

## Assumptions

None.

## Accessibility support

There are no known accessibility support issues.

## Examples

### Passed

#### Passed example 1

Video size is reduced slightly with a border added to the right and bottom of the frame. Sign language interpretation in a overlay box in the bottom right with minimal overlap on the main video frame.

```html
  <video controls src="lesson1.mp4"></video>
  <div class="video-border-right-bottom sign-interpreter bottom-right"></div>
```

#### Passed example 2

Sign language interpretation is provided in a completely separate window.

```html
  <video controls src="lesson2.mp4"></video>
  <a href="lesson2-sign.mp4" target="_blank">Sign interpretation (opens in a new window)</a>
```

#### Passed example 3

Sign language interpreter stands to the right of the speaker. Both are positioned to the right of the presentation. All can be seen in the video frame.

```html
  <video controls src="lesson3.mp4"></video>
```

### Failed

#### Failed example 1

Video with sign language interpretation opens sign language layer over the right hand side of the video

```html
  <video controls src="lesson4.mp4"></video>
  <div class="sign-interpreter right large"></div>
```

#### Failed example 2

Sign language interpretation is provided in a fixed position within the page/view

```html
  <style>
    video {
      position: fixed;
      right: 3em;
      top: 3em;
    }
  </style>
  <video controls src="lesson5.mp4"></video>
```

### Failed example 3

Sign language interpreter is standing in front of the presentation.

```html
  <video controls src="lesson6.mp4"></video>
```
