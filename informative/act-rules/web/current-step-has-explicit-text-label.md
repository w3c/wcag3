---
title: Current step has explicit text label
provisions:
  - current-step-has-explicit-text-label
---

This rule checks that in a multi-step process, the current step has an explicit text label or accessible text alternative indicating its status.

## Applicability

This rule applies to any multi-step process where:
* one or more steps are identified as part of a sequence, and
* a step is designated as the current step

## Expectation

The current step includes text content that explicitly contains a string indicating current status (e.g., "current", "active", "current step", or equivalent explicit wording) as part of its accessible name or visible text.

### Assumptions
* A "current step" is any step that is marked as active in the UI state.
* Text content includes visible text or accessible name content exposed in the accessibility tree.

## Examples

### Passed example 1

On a retail website, the current step in the checkout flow is identified with a visible label exposed in the accessibility tree ("Current Step").

```
<ol>
	<li>
		<a href=”step1.html”>Shipping Address - Current Step</a>
	</li>
	<li>
		<a href=”step2.html”>Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
```

### Failed example 1

On a retail website, the checkout flow highlights the current step using a bold CSS style, without explicitly showing the information in text.

```
<ol>
	<li>
		<a href=”step1.html” style=”font-weight:bold”>Shipping Address</a>
	</li>
	<li>
		<a href=”step2.html”>Billing Address</a>
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
		<a href=”step1.html” style=”color:#006400”>Shipping Address</a>
	</li>
	<li>
		<a href=”step2.html”>Billing Address</a>
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

On a retail website, the checkout flow highlights the current step using an underline CSS property, without explicitly showing the information in text.

```
<ol>
	<li>
		<a href=”step1.html” style=”text-decoration: underline”>Shipping Address</a>
	</li>
	<li>
		<a href=”step2.html”>Billing Address</a>
	</li>
	<li>
		<span>Payment Info</span>
	</li>
	<li>
		<span>Review</span>
	</li>
</ol>
```

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
