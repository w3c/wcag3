---
title: No repetitive adjacent interactive elements
provisions:
  - no-repetitive-adjacent-interactive-elements
---

This rule checks that a page/view includes no adjacent interactive elements that achieve the same outcome unless the interactive elements are included to dismiss the same element.

## Applicability

This rule applies to any page/view in which an author has provided a custom keyboard command.

## Expectation

The custom keyboard command is documented, and programmatically and visually available from any page/view to which it applies.

## Examples

### Passed example 1

A page/view includes multiple interactive elements and no adjacent elements go to the same destination.

### Passed example 2

A page/view includes repetitive adjacent interactive elements but only one is in the focus order and is :term[programmatically determinable].

### Failed example 1

A page/view includes adjacent interactive elements that have the same destination and are in the focus order or are programmatically determinable.

### Inapplicable example 1

A page/view includes no interactive elements.

### Inapplicable example 2

A modal dialog includes multiple adjacent interactive elements that dismiss the dialog element.
