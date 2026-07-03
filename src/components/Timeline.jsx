import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
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
                  flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
                  alignItems: 'flex-start',
                  gap: 3,
               }}>
               {/* Desktop dot at center */}
               <Box
                  sx={{
                     display: { xs: 'none', md: 'flex' },
                     flexShrink: 0,
                     width: { md: '50%' },
                     justifyContent: isLeft ? 'flex-end' : 'flex-start',
                     textAlign: isLeft ? 'right' : 'left',
                     pr: isLeft ? 6 : 0,
                     pl: isLeft ? 0 : 6,
                  }}>
                  <Box>
                     <ScrambleText
                        text={t(`timeline.${step.key}Date`)}
                        variant="overline"
                        component="div"
                        sx={{
                           color: 'secondary.main',
                           fontWeight: 700,
                           letterSpacing: 1.5,
                           display: 'block',
                        }}
                     />
                     <ScrambleText
                        text={t(`timeline.${step.key}`)}
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: 600, mt: 0.5 }}
                     />
                     <ScrambleText
                        text={t(`timeline.${step.key}Desc`)}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, maxWidth: 360 }}
                     />
                  </Box>
               </Box>

               {/* Mobile content */}
               <Box sx={{ display: { xs: 'block', md: 'none' }, flex: 1 }}>
                  <ScrambleText
                     text={t(`timeline.${step.key}Date`)}
                     variant="overline"
                     component="div"
                     sx={{
                        color: 'secondary.main',
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        display: 'block',
                     }}
                  />
                  <ScrambleText
                     text={t(`timeline.${step.key}`)}
                     variant="h6"
                     component="h3"
                     sx={{ fontWeight: 600, mt: 0.5 }}
                  />
                  <ScrambleText
                     text={t(`timeline.${step.key}Desc`)}
                     variant="body2"
                     color="text.secondary"
                     sx={{ mt: 0.5 }}
                  />
               </Box>
            </Box>
         </motion.div>
      </Box>
   );
}

export default function Timeline({ t }) {
   return (
      <Box id="timeline" sx={{ py: { xs: 8, md: 12 }, background: '#F6FFF6' }}>
         <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
            <SectionTitle title={t('timeline.title')} />

            {/* Desktop vertical line */}
            <Box sx={{ position: 'relative' }}>
               {STEPS.map((step, index) => (
                  <Box key={step.key} sx={{ position: 'relative' }}>
                     {/* Mobile dot */}
                     <Box
                        sx={{
                           display: { xs: 'flex', md: 'none' },
                           position: 'absolute',
                           left: 12,
                           top: { xs: 8, sm: 12, md: 16 },
                           zIndex: 2,
                        }}>
                        <FiberManualRecordIcon sx={{ color: step.color, fontSize: 20 }} />
                     </Box>

                     {/* Desktop dot */}
                     <Box
                        sx={{
                           display: { xs: 'none', md: 'flex' },
                           position: 'absolute',
                           left: '50%',
                           transform: 'translateX(-50%)',
                           top: { md: 16 },
                           zIndex: 2,
                           width: 20,
                           height: 20,
                           borderRadius: '50%',
                           background: step.color,
                           border: '3px solid #fff',
                           boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        }}
                     />

                     <TimelineItem step={step} index={index} t={t} />
                  </Box>
               ))}

               <TimelineLine />
            </Box>
         </Container>
      </Box>
   );
}
