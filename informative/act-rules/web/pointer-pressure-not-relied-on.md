---
title: Pointer pressure not relied on
provisions:
  - pointer-pressure-not-relied-on
---

## Applicability

This rule applies to any interactive content that uses variable pointer pressure to achieve functionality.

## Expectation

Variable pointer pressure isn't the only way to achieve functionality unless it is essential.

## Examples

### Passed example 1
A drawing app uses a hard press for an undo function. The app also provides for an undo function as a menu item and also by keystroke (<kbd><kbd>CTRL</kbd> + <kbd>z</kbd></kbd>).

### Passed example 2
A paint app uses stylus pointer pressure to reflect ink flow to canvas. Because the app is simulating a physical brush, variable pressure is essential to the functionality.

### Passed example 3
A piano app uses pointer pressure to emulate how hard keys are pressed. Because the app is simulating a physical musical instrument, variable pressure is essential to the functionality.

### Failed example 1
A photo editing app uses a hard press on the displayed image/canvas to open a menu of filters and actions. There is no alternative way to reach the filters and actions anywhere else in the app.
### Inapplicable example 1
An interface uses “point and click” where the pressure applied to the mouse button does not affect the outcome.

### Inapplicable example 2
An interface which is sensitive to pressure applied to a touchscreen, but the effect does not vary with varying amounts of pressure. 