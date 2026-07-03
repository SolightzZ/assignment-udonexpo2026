import { useCallback } from 'react';

/**
 * Returns a stable callback that smooth-scrolls to the given CSS selector.
 * @param {string} selector - CSS selector e.g. '#about'
 * @returns {() => void}
 */
export default function useScrollTo(selector) {
   return useCallback(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
   }, [selector]);
}
