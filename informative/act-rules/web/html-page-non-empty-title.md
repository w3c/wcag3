---
title: HTML page has non-empty title
provisions:
  - page-view-title-available
---

This rule checks that a non-embedded HTML page has a non-empty title.

## Applicability

This rule applies to the root element of the web page, if it is an html element.

## Expectation 1

Each target element has at least one descendant that is a title element.

## Expectation 2

For each target element, the first HTML title element that is a descendant of the document element has children that are text nodes that are not only whitespace.

## Examples

### Passed example 1

This page has a title element with content.

```
<html>
	<title>This page has a title</title>
</html>
```

### Passed example 2

This page has a title element that serves as the title for the page and the iframe since the iframe does not have its own.

```
<html>
	<title>This page gives a title to an iframe</title>
	<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

### Passed example 3

This page has two title elements with content.

```
<html>
	<head>
		<title>Title of the page.</title>
	</head>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

### Passed example 4

This page has one title element with content, which is within the body element.

```
<html>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

### Passed example 5

This page has two title elements and only the first has content.

```
<html>
	<head>
		<title>Title of the page.</title>
	</head>
	<body>
		<title></title>
	</body>
</html>
```

### Failed example 1

This page does not have a title element.

```
<html>
	<h1>this page has no title</h1>
</html>
```

### Failed example 2

This page has a title element that is empty.

```
<html>
	<title></title>
</html>
```

### Failed example 3

This page does not have a title element. The title element in the content of the iframe does not function as the title for the entire page.

```
<html>
	<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

### Failed Example 4

This page has two title elements and the first is empty.

```
<html>
	<head>
		<title></title>
	</head>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

### Failed example 5

This page has a title element that only contains a separator character.

```
<html>
	<title> </title>
</html>
```

### Inappplicable example 1

This title element is a child of an svg element.

```
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```
