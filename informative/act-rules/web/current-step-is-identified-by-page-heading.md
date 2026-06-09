---
title: Current step is identified by page heading
provisions:
  - current-step-indicated
---

This rule checks whether the current step in a multi-step process is identified by a heading that corresponds to the step content currently presented in the interface.

## Applicability

This rule applies to any multi-step process where:
* one or more steps are identified as part of a sequence, and
* a step is designated as the current step

## Expectation 1

A heading exists that corresponds to the current step.

## Expectation 2

No headings associated with steps other than the current step are used within the page/view.

## Expectation 3

The heading corresponds to the content of the active step

## Examples

### Passed example 1

On a retail website, the current step in the checkout flow is indicated using a bold CSS style. The subsequent h1 serves as the unique page heading for the step and clearly represents the current step. There are no other headings corresponding to the remaining steps.

```
<ol>
	<li>
		<a href=”step1.html” style=”font-wieght:bold”>Shipping Address</a>
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
<h1>Shipping Address</h1>
<div>Shipping step content</div>
```

### Passed example 2

On a retail website, the current step in the checkout flow is indicated using a bold CSS style. Although the page's h1 is “Checkout”, it does not correspond to any specific step and instead describes the overall multi-step process. The subsequent h2 serves as the unique page heading for the step and clearly represents the current step. There are no other headings corresponding to the remaining steps.

```
<ol>
	<li>
		<a href=”step1.html” style=”font-wieght:bold”>Shipping Address</a>
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
<h1>Checkout</h1>
<h2>Shipping Address</h2>
<div>Shipping step content</div>
```

### Failed example 1

On a retail website, the current step in the checkout flow is indicated using a bold CSS style. Although the page’s h1 is “Checkout”, it does not correspond to any specific step and instead describes the overall multi-step process. The subsequent h2 serves as a page heading for the step and represents the current step. However, since other headings also correspond to the remaining steps, it is not immediately clear which one represents the current step, so the rule is not satisfied.

```
<ol>
  <li>
    <a href=”step1.html” style=”font-wieght:bold”>Shipping Address</a>
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
<h1>Checkout</h1>
<section aria-labelledby=”ship”>
  <h2>
    <button aria-expanded=”true” id=”ship”>Shipping Address</button>
  </h2>
  <div>Shipping step content</div>
</section>
<section aria-labelledby=”bill”>
  <h2>
    <button disabled aria-expanded=”false” id=”bill”>Billing Address</button>
  </h2>
</section>
<section aria-labelledby=”paym”>
  <h2>
    <button disabled aria-expanded=”false” id=”paym”>Payment Info</button>
  </h2>
</section>
<section aria-labelledby=”review”>
  <h2>
    <button disabled aria-expanded=”false” id=”review”>Review</button>
  </h2>
</section>
```

### Failed example 2

On a retail website, the current step in the checkout flow is indicated using a bold CSS style. The page contains a single heading, “Checkout,” which does not correspond to the active step; therefore, the rule is not satisfied.

```
<ol>
	<li>
		<a href=”step1.html” style=”font-wieght:bold”>Shipping Address</a>
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
<h1>Checkout</h1>
<b>Shipping Address</b>
<div>Shipping step content</div>
```

### Inapplicable example 1

The homepage of a website is not a multi-step process; therefore, it contains no steps and, consequently, no active step.

### Inapplicable example 2

On a retail website, the checkout flow is implemented as a single-page process; therefore, there is no sequence and no designated active step.

### Inapplicable example 3

A contact form is a single-step process; therefore, there is only one step and no need to indicate an active step.
