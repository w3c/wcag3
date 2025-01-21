---
subtitle: Introduction
---

*   User Agents:
    *   When the page load fails, the browser handles server created errors through the headers. The server can provide a page to react or the browser react. The browser-provided-page needs to be understandable.
    *   Browsers support `<dialog>` element so authors can style it appropriately.
    *   Browsers can re-direct URL typos (or attacks) to common correct URLs (and inform the user when they do so.)

*   Assistive Technologies:
    *   Assistive Technologies need to inform users that an error notification such as a modal window is opening.
    *   Assistive Technologies need to support the `<dialog>` element
*   APIs. The spec is supported and implemented correctly. The API has to fire an event to notify the assistive technology that the event has occurred. We need to enforce that all parts of the stack cooperate.

*   Note: These should not be separate methods but should be part of ARIA or Core Accessibility API, OR we have a built out example of how all the different parts fit together coherently to realize these outcomes

### Summary

Coming soon

<dl class="method-card">
  <div>
    <dt>Platform:</dt>
    <dd>Any platform supporting HTML</dd>
  </div>
  <div>
    <dt>Technology:</dt>
    <dd>HTML</dd>
  </div>
</dl>

### How it solves user need

Coming soon