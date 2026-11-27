---
title: Sign language presentation controllable
provisions:
  - control-sign-language-presentation
---

The rule tests that the presentation of sign language interpretation can be controlled by the user.

## Applicability

This rule applies to any audio only or video with audio content that includes sign language interpretation, including content that is part of a related set, including but not limited to a series, course, or playlist. This rule does not apply to video content where the sign language interpretation is hard-coded into the video.

## Expectation

There is an accessible way for users to reposition and resize any sign language interpretation.

## Background

This rule supports the WCAG 3 outcome for consistent sign language presentation. Users may need to move or enlarge an interpreter to see them clearly or to avoid obscuring important content. Providing controls lets users adjust the presentation to suit their needs.

## Assumptions

* Sign language interpretation is provided and intended for user consumption.
* The interpretation is not hard-coded into the video content.

## Accessibility support

There are no known accessibility support issues.

## Examples

### Passed

#### Passed example 1

Sign language interpretation is opened in a separate window allowing users to control that using system controls.

```html
  <video controls src="lesson1.mp4"></video>
  <a href="lesson1-sign.mp4" target="_blank">Sign interpretation (opens in a new window)</a>
```

#### Passed example 2

Sign language interpretation is opened in a popup within the current page/view. The popup includes accessible controls to allow for moving and resizing.

```html
  <video controls src="lesson2.mp4"></video>
  <a href="lesson2-sign.mp4" href="javascript:interpreter-popup()">Sign interpretation (opens popup)</a>
```

#### Passed example 3

The video player offers options to change the interpreter position and size.

```html
  <video controls src="lesson3.mp4"></video>
  <button>Interpreter position</button>
  <button>Interpreter size</button>
```

### Failed

#### Failed Example 1

Sign language interpretation is opened in a separate window but the window is set to a fixed size.

```html
  <video controls src="lesson1.mp4"></video>
  <button id="open-interpretation">Sign interpretation (opens in a new window)</button>

  <script>
  document.getElementById("open-interpretation").addEventListener("click", function(e) {
    const win = window.open(
      "about:blank",
      "appWindow",
      "popup=yes,width=400,height=250,toolbar=no,menubar=no,location=no,status=no"
    );

    win.addEventListener("resize", function(e) {
      win.resizeTo(400, 250);
    });
  });
  </script>
```

#### Failed Example 2

Sign language interpretation is opened in a separate window but the window is set to a fixed position.

```html
  <video controls src="lesson2.mp4"></video>
  <button id="open-interpretation">Sign interpretation (opens in a new window)</button>

  <script>
  document.getElementById("open-interpretation").addEventListener("click", function(e) {
    const win = window.open(
      "about:blank",
      "appWindow",
      "popup=yes,width=400,height=250,toolbar=no,menubar=no,location=no,status=no"
    );

    const orgX = win.screenX,
          orgY = win.screenY;

    var oldX = win.screenX,
        oldY = win.screenY;

    var interval = setInterval(function(){
      if(oldX != win.screenX || oldY != win.screenY){
        win.moveTo(orgX, orgY);
      }
      
      oldX = win.screenX;
      oldY = win.screenY;
    }, 500);
  });
  </script>

```

#### Failed Example 3

Sign language interpretation is opened in a fixed position popup within the current page/view.

```html
  <video controls src="lesson3.mp4"></video>
  <button id="open-fixed-popup">Sign interpretation (opens popup)</button>
```
