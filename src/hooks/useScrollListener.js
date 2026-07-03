import { useEffect } from 'react';

/**
 * Register a scroll listener with automatic cleanup.
 * @param {(scrollY: number) => void} onScroll
 * @param {boolean} [enabled=true] - conditionally disable the listener
 */
export default function useScrollListener(onScroll, enabled = true) {
   useEffect(() => {
      if (!enabled) return;
      const handler = () => onScroll(window.scrollY);
      window.addEventListener('scroll', handler, { passive: true });
      return () => window.removeEventListener('scroll', handler);
   }, [onScroll, enabled]);
}
