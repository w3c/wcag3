---
title: Multi-step process identification conveys structure or count
provisions:
  - steps-indicated
---

The identification of a multi-step process conveys either the number of steps or the structure of the process.

## Applicability

This rule applies to pages/views that are part of a multi-step process where steps are identified, except when the total number of steps is unknown or the sequence of steps depends on user input.

## Expectation 1

The identification of steps conveys at least one of the following:
* the total number of steps in the process (e.g., "Step 1 of 4", "2 / 4"), or
* the structure of the process (e.g., ordered sequence of steps or stepper navigation representing progression through a process)

## Expectation 2

This indication is:
* perceivable to users visually, and
* programmatically determinable


## Assumptions
* A multi-step process consists of multiple sequential views or states required to complete a task.

## Examples

### Passed example 1

The total number of steps is explicitly conveyed.

```
<p>Step 2 of 4</p>
<h1>Billing Information</h1>
```

### Passed example 2

The current position and total number of steps are indicated.

```
<p>2 / 5</p>
<h1>Payment</h1>
```

### Passed example 3

The ordered list conveys the structure of a multi-step process.

```
<ol aria-label="Checkout steps">
  <li>Shipping</li>
  <li>Billing</li>
  <li>Review</li>
</ol>
```

### Passed example 4

The ordered sequence of labeled steps conveys the structure of a multi-step process.

```
<ul>
  <li>Shipping</li>
  <li>Billing</li>
  <li>Review</li>
</ul>
```

### Passed example 5

The progress indicator conveys position within a defined multi-step structure.

```
<style>
  .progress-container {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 66.6%;
  background-color: #4caf50;
  transition: width 0.3s ease;
}
</style>
<div class="progress-container">
  <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="1" aria-valuemax="3" aria-label="Checkout progress"></div>
</div>
```

### Failed example 1

No information is provided about steps or process structure.

```
<h1>Billing Information</h1>
<form>...</form>
```

### Failed example 2

The content does not convey number of steps or process structure.

```
<h1>Checkout</h1>
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

The progress indicator does not provide sufficient information about total steps or structure.

```
<div role="progressbar" aria-valuenow="2"></div>
```

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
