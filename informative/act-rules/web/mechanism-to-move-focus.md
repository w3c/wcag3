---
title: Document has a mechanism to move focus to non-repeated content
provisions:
  - bypass-repeated-interactive-elements
---

This rule checks that there is a mechanism to move keyboard focus to non-repeated content in the page.


## Applicability

This rule applies to any HTML page/view.

## Expectation

For each test target, there exists at least one mechanism just before each block of repeated content the moves keyboard focus from prior to the repeated content to just after the block of repeated content.

## Examples

### Passed

#### Passed example 1

In this example, the first element is a mechanism to move keyboard focus to the non-repeated content. This example assumes that the content between the first element and the non-repeated content is repeated in other pages within the scope of testing.

<a href="examples/passed/bypass-top-link/" target="_blank">Open <b>passed example 1</b> in new tab</a>

::example-code[passed/bypass-top-link/index.html]

#### Passed example 2

In this example, the third a element is a mechanism to move the focus to the non-repeated content. This example assumes that the content following the `local-navigation` block and the non-repeating content is repeated in other pages within the scope of testing.

<a href="examples/passed/bypass-content-areas/" target="_blank">Open <b>passed example 2</b> in new tab</a>

::example-code[passed/bypass-content-areas/index.html]

### Failed

#### Failed example 1

In this example, there is no mechanism provided to skip the repeated content.

<a href="examples/failed/bypass-no-mechanism/" target="_blank">Open <b>failed example 1</b> in new tab</a>

::example-code[failed/bypass-no-mechanism/index.html]

#### Failed example 2

In this example, the skip mechanism does not reference a valid `id` attribute and thus when activated will not move keyboard focus to the non-repeated content.

<a href="examples/failed/bypass-invalid-id/" target="_blank">Open <b>failed example 2</b> in new tab</a>

::example-code[failed/bypass-invalid-id/index.html]

#### Failed example 3

In this example, the skip mechanism links to content within the repeated block. Thus, following the link does not skip all the repeated content.

<a href="examples/failed/skip-into-repeated/" target="_blank">Open <b>failed example 3</b> in new tab</a>

::example-code[failed/skip-into-repeated/index.html]

### Inapplicable

### Inapplicable example 1

In this example, the test target is not HTML content.

<a href="examples/inapplicable/not-html/sample.svg" target="_blank">Open <b>inapplicable example 1</b> in new tab</a>

::example-code[inapplicable/not-html/sample.svg]
