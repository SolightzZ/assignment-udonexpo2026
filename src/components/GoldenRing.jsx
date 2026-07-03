import Box from '@mui/material/Box';
import { motion, useReducedMotion } from 'framer-motion';

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function GoldenRing() {
   const prefersReducedMotion = useReducedMotion();

   if (prefersReducedMotion) return null;

   return (
      <Box
         sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 90, sm: 110 },
            height: { xs: 90, sm: 110 },
         }}>
         <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}>
            <defs>
               <linearGradient id="goldRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8A64E" />
                  <stop offset="50%" stopColor="#F0D060" />
                  <stop offset="100%" stopColor="#C8A64E" />
               </linearGradient>
            </defs>
            <circle
               cx="50"
               cy="50"
               r={RADIUS}
               fill="none"
               stroke="url(#goldRingGrad)"
               strokeWidth={1.8}
               strokeLinecap="round"
               strokeDasharray={CIRCUMFERENCE}
               strokeDashoffset={CIRCUMFERENCE}>
               <motion.animate
                  attributeName="stroke-dashoffset"
                  from={CIRCUMFERENCE}
                  to={0}
                  dur="1.2s"
                  begin="0.7s"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.25 0.1 0.25 1"
               />
            </circle>
         </motion.svg>
      </Box>
   );
}
