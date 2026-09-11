---
title: Current step has visual and programmatic indication
provisions:
  - current-step-indicated
---

This rule checks that the current step in a multi-step process is communicated through both a visual indication and a programmatic representation of its status.

## Applicability

This rule applies to any multi-step process where:
* one or more steps are identified as part of a sequence, and
* a step is designated as the current step

## Expectation 1

The current step is visually distinguishable from non-current steps.

## Expectation 2

The current step has a programmatic state indicating current status (e.g., exposed in the accessibility tree as current).

## Assumptions
* "Visually distinguishable" is defined as any difference in presentation (layout, icon, styling, spacing, emphasis).
* "Programmatic state" refers to a machine-readable indication of current status exposed to assistive technologies.

## Examples

### Passed example 1

On a retail website, the current step in the checkout flow is identified both using a bold CSS style, and providing the information programmatically by using the `aria-current="step"` ARIA attribute.

```
<ol>
	<li>
		<a href="step1.html" aria-current="step" style="font-wieght:bold">Shipping Address</a>
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

### Passed example 2

On a retail website, the current step in the checkout flow is identified both using an icon, and providing the information programmatically by using the `aria-current="step"` ARIA attribute.

```
<ol>
	<li>
		<a href="step1.html" aria-current="step">
			<span class="icon step-indicator" aria-hidden="true">✓</span>
			Shipping Address
		</a>
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

### Failed example 1

On a retail website, the checkout flow highlights the current step using a bold CSS style, without providing the information in a programmatically accessible way.

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

On a retail website, the checkout flow highlights the current step using a different color, without providing the information in a programmatically accessible way.

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

On a retail website, the checkout flow highlights the current step using an underline CSS property, without providing the information in a programmatically accessible way.

```
<ol>
	<li>
		<a href="step1.html" style="text-decoration: underline">Shipping Address</a>
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

### Failed example 4

On a retail website, the checkout flow highlights the current step programmatically using the `aria-current="step"` ARIA attribute, without providing the information visually.

```
<ol>
	<li>
		<a href="step1.html" style="text-decoration: underline">Shipping Address</a>
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

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
