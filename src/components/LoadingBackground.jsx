import { motion } from 'framer-motion';

export default function LoadingBackground() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
         style={{
            position: 'absolute',
            inset: 0,
            background:
               'linear-gradient(170deg, #ffffff 0%, #f0f7f0 30%, #e8f5e9 60%, #d7ecd9 100%)',
         }}
      />
   );
}
