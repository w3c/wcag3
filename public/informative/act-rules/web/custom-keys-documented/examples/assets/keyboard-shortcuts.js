const actions = {
  focus: el => el.focus(),
  click: el => el.click()
};

function acceptsInput(element) {
  const selector = [
    "input",
    "textarea",
    "select",
    "[role='checkbox']",
    "[role='combobox']",
    "[role='option']",
    "[role='radio']",
    "[role='slider']",
    "[role='spinbutton']",
    "[role='textbox']",
    "[contenteditable]:not([contenteditable='false'])",
  ].join(", ");
  return element instanceof Element &&
    Boolean(element.closest(selector));
}

document.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
  if (acceptsInput(document.activeElement)) return;
  const target = document.querySelector(
    `[data-shortcut-key="${CSS.escape(e.key)}"]`
  );
  const action = actions[target?.dataset.shortcutBehavior];
  if (!action || !(target instanceof HTMLElement)) return;
  e.preventDefault();
  action(target);
});
