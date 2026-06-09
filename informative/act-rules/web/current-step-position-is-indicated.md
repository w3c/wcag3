---
title: Current step position is indicated
provisions:
  - current-step-position-indicated
---

This rule checks that in a multi-step process, the position of the current step within the overall sequence is explicitly indicated to the user both visually and programmatically.

## Applicability

This rule applies to any multi-step process where:
* one or more steps are identified as part of a sequence, and
* a step is designated as the current step

## Expectation

The current step includes content that explicitly indicates its progress within the process both visually and programmatically.

## Assumptions

* A "current step" is any step that is marked as active in the UI state.

## Examples

### Passed example 1

On a retail website, the current step in the checkout flow includes an explicit label indicating progress within the sequence.

```
<ol>
	<li>
		<a href="step1.html">Shipping Address</a>
	</li>
	<li>
		<a href="step2.html" aria-current="step">Billing Address (Step 2 of 4)</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
```

### Passed example 2

On a retail website, the current step in the checkout flow is identified through a heading that corresponds to the active step in the stepper component.

```
<ol>
	<li>
		<a href="step1.html">Shipping Address</a>
	</li>
	<li>
		<a href="step2.html" class="active">Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
<h1>Checkout</h1>
<h2>Billing Address</h2>
```

### Passed example 3

On a retail website, the current step in the checkout flow is identified through a heading that is equivalent to the active state in the stepper component, even if the labeling is slightly different.

```
<ol>
	<li>
		<a href="step1.html">Shipping Address</a>
	</li>
	<li>
		<a href="step2.html" class="active">Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
<h1>Checkout</h1>
<h2>Billing</h2>
```

### Failed example 1

On a retail website, the checkout flow highlights the current step using a bold CSS style, without explicitly showing the information in text.

```
<ol>
	<li>
		<a href="step1.html" style="font-weight:bold">Shipping Address</a>
	</li>
	<li>
		<a href="step2.html">Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
```

### Failed example 2

On a retail website, the checkout flow highlights the current step using a different color, without explicitly showing the information in text.

```
<ol>
	<li>
		<a href="step1.html" style="color:#006400">Shipping Address</a>
	</li>
	<li>
		<a href="step2.html">Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
```


### Failed example 3

On a retail website, users are made aware of the multi-step checkout process through a stepper component. However, there is no programmatic indication of the user’s position within the overall process. Only the total number of steps and the label of the current step are provided, without any explicit indication of progress within the sequence.

```
<ol class="stepper">
	<li class="completed">1</li>
	<li class="active">2</li>
	<li>3</li>
	<li>4</li>
</ol>
<h1>Checkout</h1>
<h2>Shipping</h2>
```

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
