import { ref } from "vue";

/**
 * Minimal replacement for vue-mq (Vue 2 only).
 *
 * Exposes `$mq` in every component as the name of the current breakpoint.
 * Each breakpoint value is the exclusive upper bound of its range, and the
 * last breakpoint is open-ended, matching vue-mq's behaviour:
 *   { mob: 480, ptab: 768, ... } => mob: 0-479px, ptab: 480-767px, ...
 */
export default {
  install(app, { breakpoints }) {
    const names = Object.keys(breakpoints);
    const lowerBounds = [0, ...names.slice(0, -1).map(name => breakpoints[name])];

    const queries = names.map((name, i) => {
      const parts = [`(min-width: ${lowerBounds[i]}px)`];
      if (i < names.length - 1) {
        parts.push(`(max-width: ${lowerBounds[i + 1] - 1}px)`);
      }
      return { name, mql: window.matchMedia(parts.join(" and ")) };
    });

    const findCurrent = () =>
      queries.find(({ mql }) => mql.matches)?.name ?? names[names.length - 1];

    const current = ref(findCurrent());
    const update = () => {
      current.value = findCurrent();
    };
    queries.forEach(({ mql }) => mql.addEventListener("change", update));

    Object.defineProperty(app.config.globalProperties, "$mq", {
      get: () => current.value
    });
  }
};
