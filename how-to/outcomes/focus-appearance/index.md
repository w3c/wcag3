---
layout: outcome.html
---

## Goal

Users can see which element has keyboard focus.

## Normative Text

<div class="normative">

### Outcome

  <p>{{ outcome.description }}</p>

<div class="nested">

### Foundational Requirements

For each focusable item:

1. Is the user-agent default focus indicator used? (Prerequisite)
    1. Yes, the [user-agent default indicator](methods/default-focus-indicator) is used AND the [accessibility support set] incorporates [Using the default focus indicator and checking contrast](methods/default-focus-indicator-check-contrast) and checking contrast. Stop.
    2. No, continue.


2. Is the user-agent default focus indicator used, and meets contrast across backgrounds? (Baseline)
    1. Yes, indicator must meet [Using the default focus indicator and checking contrast](methods/default-focus-indicator-check-contrast). Stop. 
    2. No, continue.


3. Is the focus indicator defined by the author? (Baseline)
    1.  Yes, indicator must meet [Custom focus indicators](methods/custom-focus-indicator). Stop.
    2.  No, fail.

  </div>

### Supplimental Requirements

- [Supplimentary indicators](methods/supplimentary-indicators).


### Assertions

- Style guide: The organization has a documented style guide which includes guidance on focus indicators, and a policy that designers and developers are required to follow the style guide. The style guide includes focus indicators that meet one of the baseline scenarios in the decision tree.

</div>

<p class="note">We would like to conduct research once we have an initial pass/fail set of examples to see if we are making decisions that support various disabilities. Please get in touch if you could facilitate this research.</p>


## What to do

Ensure focusable elements include focus indicators that are visible for people using an input device that relies on the keyboard focus to navigate.

An outline, or indicator which surrounds the focusable element is generally the most easily visible. 

All indicators for keyboard-focusable elements must be:

* **Present**: There is a visible indicator of keyboard focus.
* **Not obscured**: The focus indicator is not obscured or partially obscured (more than 50%, TBC) 
* **Persistent**: The focus indicator persists while the element has focus, but does not persist after the element loses focus.
* **Distinctive**: The keyboard focus indicator uses a style that is distinct from the style of other controls, so that the item in focus can be distinguished without reference to the non-focused state. 
* **Sufficiently visible**: According to the specific method (below), the indicator must be visually discernible whilst navigating.