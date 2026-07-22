---
title: Multi-step process is indicated
provisions:
  - steps-indicated
---

The presence of a multi-step process is indicated so that users can recognize they are interacting with a sequence of steps.

## Applicability

This rule applies to pages/views that are part of a multi-step process, except when the total number of steps is unknown or the sequence of steps depends on user input.

## Expectation 1

The page/view indicates that it is part of a multi-step process through at least one of the following mechanisms:
* an explicit step indicator (e.g., "Billing Address - Step 2 of 4", "Billing Address - Step 2", "Billing Address - Step 2/4"), or
* a multi-step interface component (e.g., stepper, progress indicator, ordered step list)

## Expectation 2

This indication is:
* perceivable to users visually, and
* programmatically determinable


## Assumptions
* A multi-step process consists of multiple sequential views or states required to complete a task.

## Examples

### Passed example 1

The page explicitly indicates the current step and the total number of steps in the process.

```
<p>Step 2 of 4</p>
<h1>Billing Information</h1>
```

### Passed example 2

The ordered navigation structure clearly represents a multi-step process.

```
<nav aria-label="Checkout steps">
  <ol>
    <li>Shipping</li>
    <li>Billing</li>
    <li>Review</li>
  </ol>
</nav>
<h1>Billing</h1>
```

### Passed example 3

The progressbar provides programmatic information about position within a multi-step process.

```
<div role="progressbar" aria-label="Checkout progress" aria-valuenow="2" aria-valuemin="1" aria-valuemax="4"></div>
<h1>Billing</h1>
```

### Passed example 4

The ordered list and current step indication make the process structure explicit.

```
<ol aria-label="Checkout steps">
  <li>Shipping</li>
  <li aria-current="step">Billing</li>
  <li>Review</li>
</ol>
```

### Failed example 1

The page does not indicate that it is part of a multi-step process.

```
<h1>Billing Information</h1>
<form>...</form>
```

### Failed example 2

The content does not provide explicit information that multiple steps exist.

```
<h1>Checkout</h1>
<button>Continue</button>
```


### Failed example 3

The step structure is not programmatically determinable.

```
<div class="steps">
  <span class="active"></span>
  <span></span>
  <span></span>
</div>
```


### Failed example 4

The step structure is not programmatically determinable.

```
<ol aria-hidden="true">
  <li>Shipping</li>
  <li aria-current="step">Billing</li>
  <li>Review</li>
</ol>
```


### Failed example 5

The step information is not visually perceivable.

```
<p class="sr-only">Step 2 of 3</p>
<h1>Billing</h1>
```


### Failed example 6

The step information is not visually perceivable.

```
<p class="sr-only">Step 2 of 3</p>
<h1>Billing</h1>
```

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
