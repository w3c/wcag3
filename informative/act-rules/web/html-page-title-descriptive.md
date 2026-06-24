---
title: HTML page title is descriptive
provisions:
  - page-view-title-available
---

This rule checks that the first title in an HTML web page describes the topic or purpose of that page.

## Applicability

This rule applies to the document title of each html web page, except if one of the following is true:
* The html web page has no document title; or
* The document title contains only whitespace text nodes.

## Expectation 1

The target element describes the topic or purpose of the overall content of the document.

## Examples

### Passed example 1

This title element describes the content of the document.

```
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Passed example 2

This title element, the first of two, describes the content of the document.

```
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
		<title>Second title is ignored</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Passed example 3

This title element, which is within the body, describes the content of the document. Even though it is not placed within the head element, as expected according to the HTML specification, the rule still passes because the browser fixes it and it doesn’t cause any known accessibility issues.

```
<html lang="en">
	<head> </head>
	<body>
		<title>Clementine harvesting season</title>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Passed example 4

The title describes the consistent purpose of the page, even though the actual content varies depending on previous user input. Since this is a review page where details such as items, shipping address, and totals may change, the title focuses on the page’s function rather than its variable content.

```
<html lang="en">
	<head>
		<title>Order review - Acme Shop</title>
	</head>
	<body>
		<h1>Review your order</h1>
		<ul>
			<li>
				<p>Item: Blue running shoes (size 42)</p>
				<p>Shipping address: 123 Main St</p>
				<p>Total: $89.99</p>
			</li>
			<li>
				<p>Item: Red running shoes (size 43)</p>
				<p>Shipping address: 123 Main St</p>
				<p>Total: $99.99</p>
			</li>
		</ul>
	</body>
</html>
```

### Passed example 5

The title describes the specific purpose of each step within the multi-step process. Although all steps belong to the same overall workflow (e.g., checkout), each page represents a distinct stage with its own function (such as shipping, billing, or payment), and the title reflects this specific purpose.

```
<html lang="en">
	<head>
		<title>Checkout - Shipping Address</title>
	</head>
	<body>
		<h1>Checkout</h1>
		<h2>Shipping Address</h2>
		…
	</body>
</html>
```

### Passed example 6

The title describes the overall purpose of the page. Although the page contains a multi-step process with sections that are progressively enabled as the user completes each step, all steps are part of a single, unified page. Therefore, the title reflects the overall process (checkout) rather than the individual steps.

```
<html lang="en">
	<head>
		<title>Checkout</title>
	</head>
	<body>
		<h1>Checkout</h1>
		<section aria-labelledby=”step1”>
			<h2>
				<button aria-expanded=”true” id=”step1”>Shipping Address</button>
			</h2>
			…
		</section>
		<section aria-labelledby=”step2”>
			<h2>
				<button aria-expanded=”false” aria-disabled=”true”  id=”step2”>Billing Address</button>
			</h2>
		</section>
		<section aria-labelledby=”step3”>
			<h2>
				<button aria-expanded=”false” aria-disabled=”true”  id=”step3”>Billing Address</button>
			</h2>
		</section>
	</body>
</html>
```

### Passed example 7

The title describes the overall purpose of the page. While the content may change dynamically based on applied filters, these changes do not alter the page’s purpose and the title remains consistent.

```
<html lang="en">
	<head>
		<title>Apparel - Acme Shop</title>
	</head>
	<body>
		<h1>Apparel</h1>
		<p>Filters applied: Color: Red, Size: M</p>
		<ul>
			<li>Red polo shirt, size M</li>
			<li>Red hoodie, size M</li>
		</ul>
		…
	</body>
</html>
```

### Failed example 1

This title element does not describe the content of the document.

```
<html lang="en">
	<head>
		<title>Apple harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Failed example 2

This title element, the first of two, does not describe the content of the document. Most browsers, and this rule, only look at the first title element.

```
<html lang="en">
	<head>
		<title>First title is incorrect</title>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Failed example 3

This page has a generic document title. The title contains the website name, but does not describe the page.

```
<html lang="en">
	<head>
		<title>University of Arkham</title>
	</head>
	<body>
		<h1>Search results for "accessibility" at the University of Arkham</h1>
		<p>None</p>
	</body>
</html>
```

### Failed Example 4

The same title “Shoes - Acme Shop” is used for different pages covering all shoes, men's shoes, and women's shoes. This title element does not describe the content of the document. The title is shared across multiple pages with different purposes, failing to distinguish between them.

```
<html lang="en">
	<head>
		<title>Shoes - Acme Shop</title>
	</head>
	<body>
		<h1>Men's shoes</h1>
		<p>Browse our collection of men's footwear.</p>
	</body>
</html>
```

### Failed example 5

The title does not sufficiently describe the specific purpose of the current step. Although the page is part of a multi-step process, each step represents a distinct view with its own function. Using a generic title such as "Checkout" fails to identify the specific purpose of the page (e.g., shipping, billing, or payment).

```
<html lang="en">
	<head>
		<title>Checkout</title>
	</head>
	<body>
		<h1>Checkout</h1>
		<h2>Shipping Address</h2>
		…
	</body>
</html>
```

### Inapplicable example 1

This title element is a child of an svg element.

```
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```
