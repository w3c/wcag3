---
title: Sign language interpretation is consistent across all content
provisions:
  - consistent-sign-language-presentation
---

The rule tests the presentation of sign language interpretation to ensure it remains static and predictable for the user.

## Applicability

This rule applies to any audio or audiovisual content that includes sign language interpretation, including content that is part of a related set, including but not limited to a series, course, or playlist.

## Expectation

All sign language interpretation:
* Is presented consistently throughout each content item; and
* Is presented consistently across related content items; and
* Uses consistent methods for identifying speakers, languages, and sounds, where applicable.

## Background

This rule supports the WCAG 3 outcome for consistent sign language presentation. It enures that users who rely on sign language interpretation can understand content without needing to re-learn presentation patterns.

Consistency includes aspects such as placement, size, styling, and how contextual information, for example speaker identity or sounds, is conveyed.

## Assumptions

* Sign language interpretation is provided and intended for user consumption
* Content items identified as related are intended to be experienced as a group

## Accessibility Support

There are no known accessibility support issues.

## Examples

### Passed

#### Passed example 1

Consistent interpreter placement within a video.

The interpreter remains in the same position and style throughout, supporting predictable viewing.

```html
  <video controls src="lesson1.mp4"></video>
  <div class="sign-interpreter bottom-right consistent-style"></div>
```

#### Passed example 2

Consistent presentation across a video series.

All videos use identical placement and styling for the interpreter.

```html
  <!-- Video 1 -->
  <div class="sign-interpreter bottom-right consistent-style"></div>
  <!-- Video 2 -->
  <div class="sign-interpreter bottom-right consistent-style"></div>
```

#### Passed example 3

Consistent speaker identification method.

Speaker labels are used uniformly throughout the media.

```html
  <div class="sign-interpreter">
    <span class="speaker-label">Speaker 1</span>
  </div>
```

#### Passed example 4

Consistent styling including size and contrast.

Interpreter visibility remains the same throughout.

```html
  <div class="sign-interpreter"
      style="position:absolute; bottom:10px; right:10px; width:200px;">
  </div>
```

### Passed example 5

Consistent handling of sound cues across media.

Non-speech sounds are represented consistently.

```html
  <div class="sign-interpreter">
    <span class="sound-label">[Applause]</span>
  </div>
```

#### Passed example 6

Alternative presentation is essential to the production.

Variation is required for narrative or artistic reasons.

```html
  <!-- Interpreter intentionally moves for storytelling -->
  <div class="sign-interpreter dynamic-placement"></div>
```

### Failed

#### Failed Example 1

The interpreter changes position within the same video.

This disrupts consistency and predictability.

```html
  <!-- Beginning -->
  <div class="sign-interpreter bottom-right"></div>
  <!-- Later -->
  <div class="sign-interpreter top-left"></div>
```

#### Failed Example 2

Different presentations across related media.

Users must adjust to different layouts between videos.

```html
  <!-- Video 1 -->
  <div class="sign-interpreter bottom-right small"></div>
  <!-- Video 2 -->
  <div class="sign-interpreter top-left large"></div>
```

#### Failed Example 3

Inconsistent speaker identification methods.

Different cues are used for identifying speakers.

```html
  <!-- Earlier -->
  <span class="speaker-label">Speaker 1</span>
  <!-- Later -->
  <span class="speaker-color blue"></span>
```

#### Failed Example 4

Interpreter size changes significantly during playback.

This affects visibility and consistency.

```html
  <div class="sign-interpreter small"></div>
  <div class="sign-interpreter large"></div>
```

#### Failed Example 5

Styling changes across media without justification.

Contrast and visibility vary, reducing usability.

```html
  <!-- Video 1 -->
  <div class="sign-interpreter dark-background"></div>
  <!-- Video 2 -->
  <div class="sign-interpreter transparent-background"></div>
```