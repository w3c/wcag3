---
title: Default sign language positioning does not hide visual content
provisions:
  - content-not-obscured-sign-language
---

The rule tests the positioning of sign language interpretation to ensure it provides a functional mechanism to prevent it from permanently obscuring critical interface elements or captions, even at small viewport sizes.

## Applicability

This rule applies to any synchronized media target that includes visible sign language interpretation within the page/view. The rule must be tested at the default viewport size and down to a viewport width of 320 CSS pixels.

## Expectation

For each test target, at the tested viewport sizes, at least one of the following is true:

1. Effective Repositioning Mechanism: A user-operable mechanism exists that allows the sign language interpretation to be repositioned or resized. There must be at least one user-configured state where the interpretation remains visible without overlapping <track> elements (captions) or occupying more than 30% of the media player's primary visual area.
2. Dedicated Safe Space: If the interpretation is permanently embedded (burned-in) and cannot be moved, it occupies a dedicated visual space that does not overlap with <track> elements.

## Examples

### Passed example 1

A video that contains sign language is able to be turned on or off.

### Failed example 1

A video that contains sign language is not able to be turned on or off.