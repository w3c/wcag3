---
title: Sign language interpretation is equivalent
provisions:
  - sign-language-equivalent
---

This rule checks that sign language interpretation is equivalent to the spoken dialogue, lyrics, and significant sound effects in audio content.

## Applicability

This rule applies to audio-only content or video content containing audio.

It does not apply to:

* Background audio.
* Audio that is an audio description of visual content.

## Expectation

The sign language interpretation conveys the same meaning as the spoken dialogue, lyrics, and significant sound effects in the audio content.

## Examples

### Passed

#### Passed example 1

A video includes an interpreter who signs the spoken content and significant sound effects including appropriate inflection and emotion.

```html
  <video controls src="lesson1.mp4"></video>
```
#### Passed example 2

An audio recording is accompanied by a video with sign language interpretation that conveys the spoken dialogue.

```html
  <audio controls src="latest-podcast.mp3"></audio>
  <video controls src="latest-podcast-signed.mp4"></video>
```

### Failed

#### Failed example 1

A video includes an interpreter who signs the spoken content. The sign language only provides a short summary of the spoken content.

```html
  <video controls src="lesson1-signed-summary.mp4"></video>
```

#### Failed example 2

An audio recording is accompanied by a video with sign language interpretation. The sign language contains errors and in places is little more than gestures approximating sign language.

```html
  <audio controls src="latest-podcast.mp3"></audio>
  <video controls src="latest-podcast-sign-gestures.mp4"></video>
```

#### Failed example 3

A video includes an interpreter who signs the spoken content. The sign language does not include any inflection or emotional tone for the video.

```html
  <video controls src="drama-flat-signed.mp4"></video>
```
