import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function GalleryLightbox({ images, selectedIndex, direction, onClose, onPrev, onNext, onSelect }) {
   const { t } = useTranslation();
   const image = images[selectedIndex];

   return (
      <Modal
         open={selectedIndex !== null}
         onClose={onClose}
         aria-label={image ? t(image.label) : t('gallery.lightbox')}
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: (theme) => theme.palette.custom.lightboxBg,
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
               onClick={onClose}
               autoFocus
               aria-label={t('gallery.close')}
               sx={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  color: (theme) => theme.palette.custom.lightboxBtnColor,
                  background: (theme) => theme.palette.custom.lightboxBtnBg,
                  zIndex: 10,
                  '&:hover': { background: (theme) => theme.palette.custom.lightboxBtnHoverBg },
               }}>
               <CloseIcon />
            </IconButton>

            <IconButton
               onClick={onPrev}
               aria-label={t('gallery.prev')}
               sx={{
                  position: 'absolute',
                  left: { xs: 16, md: 32 },
                  color: (theme) => theme.palette.custom.lightboxBtnColor,
                  background: (theme) => theme.palette.custom.lightboxBtnBg,
                  zIndex: 10,
                  '&:hover': { background: (theme) => theme.palette.custom.lightboxBtnHoverBg },
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
                        src={image.src}
                        alt={image.label}
                        sx={{
                           maxWidth: '100%',
                           maxHeight: '78vh',
                           borderRadius: 3,
                           objectFit: 'contain',
                           boxShadow: (theme) => `0 24px 64px ${theme.palette.custom.lightboxImageShadow}`,
                        }}
                     />
                     <Typography
                        variant="body2"
                        sx={{
                           mt: 2,
                           color: (theme) => theme.palette.custom.lightboxCaption,
                           fontSize: '0.9rem',
                           textAlign: 'center',
                        }}>
                        {t(image.label)}
                     </Typography>
                     <Typography
                        variant="caption"
                        sx={{
                           mt: 0.5,
                           color: (theme) => theme.palette.custom.lightboxCounter,
                           fontSize: '0.8rem',
                           letterSpacing: 1,
                        }}>
                        {selectedIndex + 1} / {images.length}
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
                        {images.map((img, i) => (
                           <Box
                              key={img.label}
                              onClick={() => onSelect(i)}
                              onKeyDown={(e) => {
                                 if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    onSelect(i);
                                 }
                              }}
                              role="tab"
                              tabIndex={0}
                              aria-selected={i === selectedIndex}
                              aria-label={t(img.label)}
                              sx={{
                                 width: i === selectedIndex ? 52 : 40,
                                 height: i === selectedIndex ? 52 : 40,
                                 '&:focus-visible': {
                                    outline: '2px solid',
                                    outlineColor: (theme) => theme.palette.custom.lightboxThumbSelected,
                                    outlineOffset: 2,
                                 },
                                 borderRadius: 1.5,
                                 overflow: 'hidden',
                                 cursor: 'pointer',
                                 border: (theme) => (i === selectedIndex ? `2px solid ${theme.palette.custom.lightboxThumbSelected}` : '2px solid transparent'),
                                 opacity: i === selectedIndex ? 1 : 0.45,
                                 transition: 'all 0.3s ease',
                                 '&:hover': {
                                    opacity: 1,
                                    borderColor: (theme) => (i === selectedIndex ? theme.palette.custom.lightboxThumbSelected : theme.palette.custom.lightboxThumbHoverBorder),
                                 },
                              }}>
                              <Box
                                 component="img"
                                 src={img.src}
                                 alt={t(img.label)}
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
               onClick={onNext}
               aria-label={t('gallery.next')}
               sx={{
                  position: 'absolute',
                  right: { xs: 16, md: 32 },
                  color: (theme) => theme.palette.custom.lightboxBtnColor,
                  background: (theme) => theme.palette.custom.lightboxBtnBg,
                  zIndex: 10,
                  '&:hover': { background: (theme) => theme.palette.custom.lightboxBtnHoverBg },
               }}>
               <ChevronRightIcon fontSize="large" />
            </IconButton>
         </Box>
      </Modal>
   );
}
