import type { Loader } from "astro/loaders";
import debounce from "lodash/debounce";
import EventEmitter from "events";

const emitter = new EventEmitter();
// Debounce to group multiple writes/renames,
// and wait for more than SAVE_DEBOUNCE_MS (which Astro's mutable-data-store does not export)
// in order for subsequent page load to retrieve the updated store entry
const debouncedEmit = debounce(() => emitter.emit("change"), 550);

/**
 * Returns a Promise that resolves the next time a loader causes filesystem updates.
 * Updates are debounced to capture related changes together.
 */
export const waitForLoaderChange = () =>
  new Promise<void>((resolve) => {
    let hasResolved = false;
    const resolveOnce = () => !hasResolved && resolve();
    emitter.once("change", resolveOnce);
    // Add a timeout as fallback in case the event is never observed
    // (this only seems to happen specifically when this file is edited)
    setTimeout(resolveOnce, 2000);
  });

const wrapLoader = (loader: Loader): Loader => ({
  ...loader,
  load: (context) => {
    const { store } = context;

    const oldClear = store.clear;
    store.clear = () => {
      debouncedEmit();
      return oldClear();
    };
    const oldDelete = store.delete;
    store.delete = (entry) => {
      debouncedEmit();
      return oldDelete(entry);
    };
    const oldSet = store.set;
    store.set = (entry) => {
      debouncedEmit();
      return oldSet(entry);
    };

    return loader.load({ ...context, store });
  },
});

/**
 * Takes a function that creates Astro Loaders,
 * and wraps it to support externally reacting to changes.
 */
export const wrapLoaderFunction =
  <F extends (...args: any) => any>(f: (...args: Parameters<F>) => Loader) =>
  (...args: Parameters<F>) =>
    wrapLoader(f(...args));
