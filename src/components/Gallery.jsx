import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import imgGalleryBotanical from '../assets/images/gallery_botanical.webp';
import imgGalleryCeremony from '../assets/images/gallery_ceremony.webp';
import imgGalleryCraft from '../assets/images/gallery_craft.webp';
import imgGalleryCuisine from '../assets/images/gallery_cuisine.webp';
import imgGalleryExpo from '../assets/images/gallery_expo.webp';
import imgGalleryNight from '../assets/images/gallery_night.webp';
import imgGalleryPark from '../assets/images/gallery_park.webp';
import imgGalleryPavilion from '../assets/images/gallery_pavilion.webp';
import imgGalleryStage from '../assets/images/gallery_stage.webp';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

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
      <Reveal delay={index * 0.08} style={{ height: '100%' }}>
         <Box
            onClick={() => onClick(index)}
            onKeyDown={(e) => {
               if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onClick(index);
               }
            }}
            role="button"
            tabIndex={0}
            aria-label={t(image.label)}
            sx={{
               position: 'relative',
               borderRadius: 1,
               overflow: 'hidden',
               cursor: 'pointer',
               aspectRatio: '4 / 3',
               '&:focus-visible': { outline: '3px solid #C8A64E', outlineOffset: 2 },
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
               alt={t(image.label)}
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
                  p: { xs: 2, md: 2.5 },
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
      </Reveal>
   );
}

export default function Gallery({ t }) {
   const [selectedIndex, setSelectedIndex] = useState(null);
   const [direction, setDirection] = useState(1);

   const openLightbox = useCallback((index) => {
      setSelectedIndex((prev) => {
         setDirection(prev === null || index > prev ? 1 : -1);
         return index;
      });
   }, []);

   const closeLightbox = useCallback(() => setSelectedIndex(null), []);

   const goPrev = useCallback(() => {
      setDirection(-1);
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : IMAGES.length - 1));
   }, []);

   const goNext = useCallback(() => {
      setDirection(1);
      setSelectedIndex((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0));
   }, []);

   // Keyboard: only active while lightbox is open
   useEffect(() => {
      if (selectedIndex === null) return;
      const handler = (e) => {
         if (e.key === 'Escape') {
            setSelectedIndex(null);
            return;
         }
         if (e.key === 'ArrowLeft') {
            setDirection(-1);
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : IMAGES.length - 1));
         }
         if (e.key === 'ArrowRight') {
            setDirection(1);
            setSelectedIndex((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0));
         }
      };
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
   }, [selectedIndex]);

   return (
      <Box id="gallery" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
         <Container maxWidth={false} sx={{ maxWidth: 1320, mx: 'auto', px: { xs: 2, md: 4 } }}>
            <SectionTitle title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

            <Box
               sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                  gap: 4,
               }}>
               {IMAGES.map((image, index) => (
                  <ImageCard key={image.label} image={image} index={index} onClick={openLightbox} t={t} />
               ))}
            </Box>
         </Container>

         <Modal
            open={selectedIndex !== null}
            onClose={closeLightbox}
            aria-label={IMAGES[selectedIndex] ? t(IMAGES[selectedIndex].label) : t('gallery.lightbox')}
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
                  autoFocus
                  aria-label={t('gallery.close')}
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
                  aria-label={t('gallery.prev')}
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

               <AnimatePresence mode="wait" custom={direction}>
                  {selectedIndex !== null && (
                     <motion.div
                        key={selectedIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -200 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
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
                        <Box
                           role="tablist"
                           aria-label={t('gallery.thumbnails')}
                           sx={{
                              display: 'flex',
                              gap: 1.5,
                              mt: 2,
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                           }}>
                           {IMAGES.map((image, i) => (
                              <Box
                                 key={image.label}
                                 onClick={() => openLightbox(i)}
                                 onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                       e.preventDefault();
                                       openLightbox(i);
                                    }
                                 }}
                                 role="tab"
                                 tabIndex={0}
                                 aria-selected={i === selectedIndex}
                                 aria-label={t(image.label)}
                                 sx={{
                                    width: i === selectedIndex ? 52 : 40,
                                    height: i === selectedIndex ? 52 : 40,
                                    '&:focus-visible': {
                                       outline: '2px solid #C8A64E',
                                       outlineOffset: 2,
                                    },
                                    borderRadius: 1.5,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: i === selectedIndex ? '2px solid #C8A64E' : '2px solid transparent',
                                    opacity: i === selectedIndex ? 1 : 0.45,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                       opacity: 1,
                                       borderColor: i === selectedIndex ? '#C8A64E' : 'rgba(255,255,255,0.5)',
                                    },
                                 }}>
                                 <Box
                                    component="img"
                                    src={image.src}
                                    alt={t(image.label)}
                                    sx={{
                                       width: '100%',
                                       height: '100%',
                                       objectFit: 'cover',
                                       display: 'block',
                                    }}
                                 />
                              </Box>
                           ))}
                        </Box>
                     </motion.div>
                  )}
               </AnimatePresence>

               <IconButton
                  onClick={goNext}
                  aria-label={t('gallery.next')}
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
