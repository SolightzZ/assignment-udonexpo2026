import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const STEPS = [
   { key: 'preparation', color: '#4CAF50' },
   { key: 'opening', color: '#C8A64E' },
   { key: 'events', color: '#1B5E20' },
   { key: 'closing', color: '#0D3B0F' },
];

const TimelineLine = styled(Box)(({ theme }) => ({
   position: 'absolute',
   left: 20,
   top: 0,
   bottom: 0,
   width: 3,
   background: `linear-gradient(180deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
   borderRadius: 2,
   [theme.breakpoints.up('md')]: {
      left: '50%',
      transform: 'translateX(-50%)',
   },
}));

function TimelineItem({ step, index, t }) {
   const isLeft = index % 2 === 0;

   return (
      <Box
         sx={{
            position: 'relative',
            pl: { xs: 7, md: 0 },
            mb: { xs: 6, md: 8 },
         }}>
         <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: 'flex-start',
                  gap: 3,
               }}>
               {/* Desktop dot at center */}
               <Box
                  sx={{
                     display: { xs: 'none', md: 'flex' },
                     flexShrink: 0,
                     width: { md: '50%' },
                     justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                     textAlign: index % 2 === 0 ? 'right' : 'left',
                     pr: index % 2 === 0 ? 6 : 0,
                     pl: index % 2 === 0 ? 0 : 6,
                  }}>
                  <Box>
                     <Typography
                        variant="overline"
                        sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1.5 }}>
                        {t(`timeline.${step.key}Date`)}
                     </Typography>
                     <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5 }}>
                        {t(`timeline.${step.key}`)}
                     </Typography>
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, maxWidth: 360 }}>
                        {t(`timeline.${step.key}Desc`)}
                     </Typography>
                  </Box>
               </Box>

               {/* Mobile content */}
               <Box sx={{ display: { xs: 'block', md: 'none' }, flex: 1 }}>
                  <Typography
                     variant="overline"
                     sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1.5 }}>
                     {t(`timeline.${step.key}Date`)}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.5 }}>
                     {t(`timeline.${step.key}`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                     {t(`timeline.${step.key}Desc`)}
                  </Typography>
               </Box>
            </Box>
         </motion.div>
      </Box>
   );
}

export default function Timeline({ t }) {
   return (
      <Box id="timeline" sx={{ py: { xs: 8, md: 12 }, background: '#F6FFF6' }}>
         <Container maxWidth="md">
            <SectionTitle title={t('timeline.title')} />

            {/* Desktop vertical line */}
            <Box sx={{ display: { xs: 'block', md: 'block' }, position: 'relative' }}>
               {/* Mobile dot */}
               {STEPS.map((step, index) => (
                  <Box key={step.key}>
                     {/* Mobile dot */}
                     <Box
                        sx={{
                           display: { xs: 'flex', md: 'none' },
                           position: 'absolute',
                           left: 12,
                           top: index * 160 + 8,
                           zIndex: 2,
                        }}>
                        <FiberManualRecordIcon sx={{ color: step.color, fontSize: 20 }} />
                     </Box>

                     <TimelineItem step={step} index={index} t={t} />
                  </Box>
               ))}

               {/* Desktop dots */}
               {STEPS.map((step, index) => (
                  <Box
                     key={step.key}
                     sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: index * 180 + 12,
                        zIndex: 2,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: step.color,
                        border: '3px solid #fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                     }}
                  />
               ))}

               <TimelineLine />
            </Box>
         </Container>
      </Box>
   );
}
