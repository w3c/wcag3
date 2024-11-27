---
layout: requirement.html
level: foundational
text: Decorative image is programmatically hidden.
---

## Techniques

* **Author technique (HTML, EPUB):** Using an empty ```alt``` attributes so the image is ignored.
* **Author technique (PDF):** Using 'artifact' elements so the image is ignored.
* **Author technique (iOS):** Using ```isAccessibilityElement``` so the image is ignored.
* **Author technique (Android):** Using ```importantForAccessibility``` so the image is ignored.