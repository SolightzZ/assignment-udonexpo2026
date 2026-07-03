import { motion } from 'framer-motion';

/**
 * Scroll-reveal animation wrapper.
 * Animates children into view on first scroll with configurable offset, delay, and direction.
 */
export default function Reveal({
   children,
   initial,
   animate,
   delay = 0,
   y,
   x,
   margin = '-60px',
   duration = 0.5,
   style,
   ...props
}) {
   const from = initial || {
      opacity: 0,
      ...(x !== undefined ? { x } : {}),
      ...(y !== undefined ? { y } : {}),
      ...(x === undefined && y === undefined ? { y: 30 } : {}),
   };
   const to = animate || {
      opacity: 1,
      ...(x !== undefined ? { x: 0 } : {}),
      ...(y !== undefined ? { y: 0 } : {}),
      ...(x === undefined && y === undefined ? { y: 0 } : {}),
   };

   return (
      <motion.div
         initial={from}
         whileInView={to}
         viewport={{ once: true, margin }}
         transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
         style={style}
         {...props}>
         {children}
      </motion.div>
   );
}
