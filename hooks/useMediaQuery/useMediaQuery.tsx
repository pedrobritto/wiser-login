import { useEffect, useState } from "react";

/**
 * Use Media Queries inside JS.
 * Uses window.matchMedia. Should work SSR.
 * Handles screen resize.
 *
 * Taken from:
 * https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633/c769cdc6a658b3925e9e2e204d228400d132965f#gistcomment-3474308
 *
 * @param {string} query Single CSS media query
 * @returns {boolean} Boolean indicating if media query is
 *    true/false for current viewport dimensions.
 *
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1200px'));
 * // if viewport width is 1200px or above:
 * // isDesktop -> true
 *
 * // if viewport width is less than 1200px:
 * // isDesktop -> false
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    setMatches(mediaQuery.matches);

    const handler = (event): void => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return matches;
}

export default useMediaQuery;
