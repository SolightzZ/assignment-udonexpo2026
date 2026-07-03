import { useState, useCallback, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import imgGalleryExpo from '../assets/images/gallery_expo.jpg';
import imgGalleryPark from '../assets/images/gallery_park.jpg';
import imgGalleryStage from '../assets/images/gallery_stage.jpg';
import imgGalleryCraft from '../assets/images/gallery_craft.jpg';
import imgGalleryCuisine from '../assets/images/gallery_cuisine.jpg';
import imgGalleryCeremony from '../assets/images/gallery_ceremony.jpg';
import imgGalleryPavilion from '../assets/images/gallery_pavilion.jpg';
import imgGalleryNight from '../assets/images/gallery_night.jpg';
import imgGalleryBotanical from '../assets/images/gallery_botanical.jpg';

const IMAGES = [
   { src: imgGalleryExpo, label: 'gallery.expo' },
   { src: imgGalleryPark, label: 'gallery.park' },
   { src: imgGalleryStage, label: 'gallery.stage' },
   { src: imgGalleryCraft, label: 'gallery.craft' },
   { src: imgGalleryCuisine, label: 'gallery.cuisine' },
   { src: imgGalleryCeremony, label: 'gallery.ceremony' },
   { src: imgGalleryPavilion, label: 'gallery.pavilion' },
   { src: imgGalleryNight, label: 'gallery.night' },
   { src: imgGalleryBotanical, label: 'gallery.botanical' },
];

function ImageCard({ image, index, onClick, t }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-60px' }}
         transition={{ duration: 0.5, delay: index * 0.08 }}
         style={{ height: '100%' }}>
         <Box
            onClick={() => onClick(index)}
            sx={{
               position: 'relative',
               borderRadius: 4,
               overflow: 'hidden',
               cursor: 'pointer',
               height: 280,
               border: '1px solid rgba(0,0,0,0.06)',
               transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
               '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                  '& .gallery-img': { transform: 'scale(1.08)' },
                  '& .gallery-overlay': { opacity: 1 },
               },
            }}>
            <Box
               component="img"
               src={image.src}
               alt={image.label}
               loading="lazy"
               className="gallery-img"
               sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
               }}
            />
            <Box
               className="gallery-overlay"
               sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(13,59,15,0.6) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: 2.5,
               }}>
               <Typography
                  variant="body2"
                  sx={{
                     color: '#fff',
                     fontWeight: 500,
                     fontSize: '0.9rem',
                     textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                  }}>
                  {t(image.label)}
               </Typography>
            </Box>
         </Box>
      </motion.div>
   );
}

export default function Gallery({ t }) {
   const [selectedIndex, setSelectedIndex] = useState(null);

   const openLightbox = useCallback((index) => setSelectedIndex(index), []);
   const closeLightbox = useCallback(() => setSelectedIndex(null), []);

   const goPrev = useCallback(() => {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : IMAGES.length - 1));
   }, []);

   const goNext = useCallback(() => {
      setSelectedIndex((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0));
   }, []);

   useEffect(() => {
      if (selectedIndex === null) return;
      const handler = (e) => {
         if (e.key === 'Escape') closeLightbox();
         if (e.key === 'ArrowLeft') goPrev();
         if (e.key === 'ArrowRight') goNext();
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
   }, [selectedIndex, closeLightbox, goPrev, goNext]);

   return (
      <Box id="gallery" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
         <Container maxWidth="lg">
            <SectionTitle title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

            <Grid container spacing={3}>
               {IMAGES.map((image, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                     <ImageCard image={image} index={index} onClick={openLightbox} t={t} />
                  </Grid>
               ))}
            </Grid>
         </Container>

         <Modal
            open={selectedIndex !== null}
            onClose={closeLightbox}
            aria-label="gallery lightbox"
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               background: 'rgba(0,0,0,0.85)',
               backdropFilter: 'blur(8px)',
            }}>
            <Box
               sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}>
               <IconButton
                  onClick={closeLightbox}
                  aria-label="close lightbox"
                  sx={{
                     position: 'absolute',
                     top: 24,
                     right: 24,
                     color: '#fff',
                     background: 'rgba(255,255,255,0.1)',
                     backdropFilter: 'blur(8px)',
                     zIndex: 10,
                     '&:hover': { background: 'rgba(255,255,255,0.2)' },
                  }}>
                  <CloseIcon />
               </IconButton>

               <IconButton
                  onClick={goPrev}
                  aria-label="previous image"
                  sx={{
                     position: 'absolute',
                     left: { xs: 16, md: 32 },
                     color: '#fff',
                     background: 'rgba(255,255,255,0.1)',
                     backdropFilter: 'blur(8px)',
                     zIndex: 10,
                     '&:hover': { background: 'rgba(255,255,255,0.2)' },
                  }}>
                  <ChevronLeftIcon fontSize="large" />
               </IconButton>

               <AnimatePresence mode="wait">
                  {selectedIndex !== null && (
                     <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{
                           display: 'flex',
                           flexDirection: 'column',
                           alignItems: 'center',
                           maxWidth: '85vw',
                           maxHeight: '90vh',
                        }}>
                        <Box
                           component="img"
                           src={IMAGES[selectedIndex].src}
                           alt={IMAGES[selectedIndex].label}
                           sx={{
                              maxWidth: '100%',
                              maxHeight: '78vh',
                              borderRadius: 3,
                              objectFit: 'contain',
                              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                           }}
                        />
                        <Typography
                           variant="body2"
                           sx={{
                              mt: 2,
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.9rem',
                              textAlign: 'center',
                           }}>
                           {t(IMAGES[selectedIndex].label)}
                        </Typography>
                        <Typography
                           variant="caption"
                           sx={{
                              mt: 0.5,
                              color: 'rgba(255,255,255,0.4)',
                              fontSize: '0.8rem',
                              letterSpacing: 1,
                           }}>
                           {selectedIndex + 1} / {IMAGES.length}
                        </Typography>
                     </motion.div>
                  )}
               </AnimatePresence>

               <IconButton
                  onClick={goNext}
                  aria-label="next image"
                  sx={{
                     position: 'absolute',
                     right: { xs: 16, md: 32 },
                     color: '#fff',
                     background: 'rgba(255,255,255,0.1)',
                     backdropFilter: 'blur(8px)',
                     zIndex: 10,
                     '&:hover': { background: 'rgba(255,255,255,0.2)' },
                  }}>
                  <ChevronRightIcon fontSize="large" />
               </IconButton>
            </Box>
         </Modal>
      </Box>
   );
}
