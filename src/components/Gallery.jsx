import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { lazy, Suspense, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const GalleryLightbox = lazy(() => import('./GalleryLightbox'));

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

const ImageCard = memo(function ImageCard({ image, index, onClick }) {
   const { t } = useTranslation();
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
                '&:focus-visible': { outline: '3px solid', outlineOffset: 2, outlineColor: 'secondary.main' },
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
                '&:hover': {
                   transform: 'translateY(-4px)',
                   boxShadow: (theme) => theme.palette.custom.galleryCardHoverShadow,
                   '& > img': { transform: 'scale(1.08)' },
                   '& > div:last-of-type': { opacity: 1 },
                },
            }}>
            <Box
               component="img"
               src={image.src}
               alt={t(image.label)}
               loading="lazy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
               }}
            />
            <Box
               sx={{
                  position: 'absolute',
                  inset: 0,
                   background: (theme) => `linear-gradient(180deg, transparent 50%, ${theme.palette.custom.galleryOverlayGradient} 100%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  p: { xs: 2, md: 2.5 },
               }}>
               <Typography
                  variant="body2"
                  sx={{
                      color: (theme) => theme.palette.custom.galleryOverlayText,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      textShadow: (theme) => `0 1px 4px ${theme.palette.custom.galleryOverlayShadow}`,
                  }}>
                  {t(image.label)}
               </Typography>
            </Box>
          </Box>
       </Reveal>
    );
});

export default function Gallery() {
   const { t } = useTranslation();
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
      <Box id="gallery" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
         <Container maxWidth={false} sx={{ maxWidth: 1320, mx: 'auto', px: { xs: 2, md: 4 } }}>
            <SectionTitle title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

            <Box
               sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                  gap: 4,
               }}>
               {IMAGES.map((image, index) => (
                  <Box 
                     key={image.label} 
                     sx={{ 
                        gridColumn: index === IMAGES.length - 1 ? { xs: 'span 1', sm: 'span 2', md: 'span 1' } : 'span 1' 
                     }}
                  >
                      <ImageCard image={image} index={index} onClick={openLightbox} />
                  </Box>
               ))}
            </Box>
         </Container>

         <Suspense fallback={null}>
            <GalleryLightbox
               images={IMAGES}
               selectedIndex={selectedIndex}
               direction={direction}
               onClose={closeLightbox}
               onPrev={goPrev}
               onNext={goNext}
               onSelect={openLightbox}
            />
         </Suspense>
      </Box>
   );
}
