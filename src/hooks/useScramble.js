import { useEffect, useRef, useState } from 'react';

const CHARSET =
   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789▓░▒█的一是不了人有山川花木森水火土金';

function randomChar() {
   return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

function randomizeAll(text) {
   return text
      .split('')
      .map(() => randomChar())
      .join('');
}

function revealText(text, progress) {
   const words = text.split(' ');
   const totalWords = words.length;

   return words
      .map((word, wordIndex) => {
         const wordStart = (wordIndex / totalWords) * 0.4;
         const wordEnd = wordStart + 0.6;
         const wordProgress = Math.max(
            0,
            Math.min(1, (progress - wordStart) / (wordEnd - wordStart)),
         );

         if (wordProgress <= 0) return randomizeAll(word);
         if (wordProgress >= 1) return word;

         const chars = word.split('');
         const revealCount = Math.floor(wordProgress * chars.length);

         return chars.map((char, i) => (i < revealCount ? char : randomChar())).join('');
      })
      .join(' ');
}

export default function useScramble(text, { duration = 600, delay = 0 } = {}) {
   const [display, setDisplay] = useState(() => randomizeAll(text));
   const rafRef = useRef(null);

   useEffect(() => {
      const startAnimation = () => {
         const startTime = performance.now();
         const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            if (progress >= 1) {
               setDisplay(text);
               return;
            }
            setDisplay(revealText(text, progress));
            rafRef.current = requestAnimationFrame(tick);
         };
         rafRef.current = requestAnimationFrame(tick);
      };

      let timerId;
      if (delay > 0) {
         timerId = setTimeout(startAnimation, delay);
      } else {
         startAnimation();
      }

      return () => {
         clearTimeout(timerId);
         if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
   }, [text, duration, delay]);

   return display;
}
