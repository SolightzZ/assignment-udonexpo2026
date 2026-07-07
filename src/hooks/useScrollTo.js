import { useCallback } from 'react';

export default function useScrollTo(selector) {
   return useCallback(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
   }, [selector]);
}
