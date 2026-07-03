import { motion, useReducedMotion } from 'framer-motion';

const LEAVES = [
   { size: 14, x: '15%', delay: 1.1, duration: 6, rotateEnd: 45 },
   { size: 10, x: '75%', delay: 1.3, duration: 7, rotateEnd: -30 },
   { size: 12, x: '40%', delay: 1.5, duration: 5.5, rotateEnd: 60 },
   { size: 8, x: '60%', delay: 1.7, duration: 6.5, rotateEnd: -45 },
   { size: 11, x: '85%', delay: 1.9, duration: 5, rotateEnd: 30 },
   { size: 9, x: '25%', delay: 2.1, duration: 7, rotateEnd: -60 },
];

const GLOW_DOTS = [
   { size: 6, x: '20%', y: '18%', delay: 0.8, duration: 3 },
   { size: 4, x: '70%', y: '28%', delay: 1.0, duration: 4 },
   { size: 5, x: '50%', y: '12%', delay: 1.2, duration: 3.5 },
   { size: 3, x: '80%', y: '45%', delay: 1.4, duration: 2.5 },
   { size: 7, x: '35%', y: '40%', delay: 1.6, duration: 3.2 },
   { size: 4, x: '65%', y: '10%', delay: 1.8, duration: 4.2 },
];

const SPARKLES = [
   { size: 10, x: '30%', y: '22%', delay: 0.9, duration: 2.5 },
   { size: 8, x: '55%', y: '32%', delay: 1.1, duration: 3 },
   { size: 12, x: '45%', y: '18%', delay: 1.3, duration: 2.8 },
];

function Leaf({ leaf }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20, rotate: 0 }}
         animate={{
            opacity: [0, 0.6, 0.3, 0],
            y: [20, -60, -120, -200],
            rotate: [0, leaf.rotateEnd, leaf.rotateEnd * 0.5, leaf.rotateEnd],
         }}
         transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 2,
         }}
         style={{
            position: 'absolute',
            left: leaf.x,
            bottom: -20,
            width: leaf.size,
            height: leaf.size * 1.6,
            borderRadius: '0 50% 50% 50%',
            background: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
            opacity: 0.5,
            pointerEvents: 'none',
         }}
      />
   );
}

function GlowDot({ dot }) {
   return (
      <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{
            opacity: [0, 0.4, 0.1, 0.3, 0],
            scale: [0, 1, 0.6, 0.8, 0],
            y: [0, -10, -20, -30, -40],
         }}
         transition={{
            duration: dot.duration,
            delay: dot.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
         }}
         style={{
            position: 'absolute',
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #C8A64E, rgba(200, 166, 78, 0))',
            pointerEvents: 'none',
            filter: 'blur(1px)',
         }}
      />
   );
}

function Sparkle({ sparkle }) {
   return (
      <motion.svg
         width={sparkle.size}
         height={sparkle.size}
         viewBox="0 0 24 24"
         initial={{ opacity: 0, scale: 0, rotate: 0 }}
         animate={{
            opacity: [0, 0.5, 0, 0.4, 0],
            scale: [0, 1, 0.5, 0.8, 0],
            rotate: [0, 180, 360],
         }}
         transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1.5,
         }}
         style={{
            position: 'absolute',
            left: sparkle.x,
            top: sparkle.y,
            pointerEvents: 'none',
         }}>
         <path
            d="M12 2l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z"
            fill="#C8A64E"
            opacity={0.6}
         />
      </motion.svg>
   );
}

export default function LoadingParticles() {
   const prefersReducedMotion = useReducedMotion();

   if (prefersReducedMotion) return null;

   return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
         {LEAVES.map((leaf, i) => (
            <Leaf key={`leaf-${i}`} leaf={leaf} />
         ))}
         {GLOW_DOTS.map((dot, i) => (
            <GlowDot key={`dot-${i}`} dot={dot} />
         ))}
         {SPARKLES.map((s, i) => (
            <Sparkle key={`sparkle-${i}`} sparkle={s} />
         ))}
      </div>
   );
}
