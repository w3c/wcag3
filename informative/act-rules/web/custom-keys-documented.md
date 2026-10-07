---
title: Custom keyboard commands are documented
provisions:
  - custom-keys-documented
---

This rule checks that custom keyboard commands are documented and that documentation is programmatically and visually available from any page/view to which they apply.

## Applicability

This rule applies to any page/view in which an author has provided a custom keyboard command.

## Expectation

The custom keyboard command is documented, and programmatically and visually available from any page/view to which it applies.

## Examples

### Shared assets

Several examples use the following Javascript.

#### [`keyboard-shortcuts.js`](examples/assets/keyboard-shortcuts.js)

::example-code[assets/keyboard-shortcuts.js]

### Passed

#### Passed example 1

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented as programmatically related description text for the input.

<a href="examples/passed/related-hint-text/" target="_blank">Open <b>passed example 1</b> in new tab</a>

::example-code[passed/related-hint-text/index.html]

#### Passed example 2

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented on a linked "Help" page.

<a href="examples/passed/linked-help-page/" target="_blank">Open <b>passed example 2</b> in new tab</a>

::example-code[passed/linked-help-page/index.html]

##### Linked help page

::example-code[passed/linked-help-page/help/index.html]

#### Passed example 3

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented in a "Help" dialog on the same page.

<a href="examples/passed/help-dialog/" target="_blank">Open <b>passed example 3</b> in new tab</a>

::example-code[passed/help-dialog/index.html]

#### Passed example 4

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented in a “Help” dialog on the same page, which can be opened using a documented custom keyboard command of ? (question mark).

<a href="examples/passed/help-dialog-shortcut/" target="_blank">Open <b>passed example 4</b> in new tab</a>

::example-code[passed/help-dialog-shortcut/index.html]

### Failed

#### Failed example 1

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is not documented.

<a href="examples/failed/no-documentation/" target="_blank">Open <b>failed example 1</b> in new tab</a>

::example-code[failed/no-documentation/index.html]

#### Failed example 2

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is visually documented but not programmatically determinable.

<a href="examples/failed/not-programmatically-determinable/" target="_blank">Open <b>failed example 2</b> in new tab</a>

::example-code[failed/not-programmatically-determinable/index.html#markup]

The visible documentation is achieved using CSS techniques in which the conveyed meaning is not programmatically determinable:

::example-code[failed/not-programmatically-determinable/index.html#styles]{lang=css}

#### Failed example 3

A search input can be focused using a custom keyboard command of s. This custom keyboard command is not documented. As a red herring, a custom keyboard command of / (forward slash) is documented, but does nothing.

<a href="examples/failed/wrong-hint-text/" target="_blank">Open <b>failed example 3</b> in new tab</a>

::example-code[failed/wrong-hint-text/index.html]

#### Failed example 4

A search input can be focused using a custom keyboard command of / (forward slash). This custom keyboard command is documented with the input’s `placeholder` attribute, which is not reliably programmatically determinable.

<a href="examples/failed/placeholder-hint-text/" target="_blank">Open <b>failed example 4</b> in new tab</a>

::example-code[failed/placeholder-hint-text/index.html]

### Inapplicable

#### Inapplicable example 1

A button reveals a tooltip of "Press Space to activate" on focus and hover. The documentation is not necessary since it is describing a standard platform keyboard command.

<a href="examples/inapplicable/unnecessary-documentation/" target="_blank">Open <b>inapplicable example 1</b> in new tab</a>

::example-code[inapplicable/unnecessary-documentation/index.html]
