import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ForestIcon from '@mui/icons-material/Forest';
import PublicIcon from '@mui/icons-material/Public';
import HandymanIcon from '@mui/icons-material/Handyman';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import imgGarden from '../assets/images/highlight_garden.jpg';
import imgIntl from '../assets/images/highlight_intl.jpg';
import imgActivity from '../assets/images/highlight_activity.jpg';
import imgFood from '../assets/images/highlight_food.jpg';
import imgCulture from '../assets/images/highlight_culture.jpg';
import imgInnovation from '../assets/images/highlight_innovation.jpg';

const HIGHLIGHTS = [
   { key: 'gardens', icon: ForestIcon, color: '#2E7D32' },
   { key: 'international', icon: PublicIcon, color: '#1565C0' },
   { key: 'activities', icon: HandymanIcon, color: '#E65100' },
   { key: 'food', icon: RestaurantIcon, color: '#C62828' },
   { key: 'culture', icon: TheaterComedyIcon, color: '#6A1B9A' },
   { key: 'innovation', icon: EnergySavingsLeafIcon, color: '#00695C' },
];

const IMAGES = [imgGarden, imgIntl, imgActivity, imgFood, imgCulture, imgInnovation];

function HighlightCard({ highlight, image, index, t }) {
   const { key, icon: Icon, color } = highlight;

   return (
      <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-60px' }}
         transition={{ duration: 0.5, delay: index * 0.1 }}>
         <Card
            sx={{
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               overflow: 'hidden',
               borderRadius: 4,
            }}>
             <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                   component="img"
                   height="180"
                   image={image}
                   alt={t(`highlights.${key}`)}
                   loading="lazy"
                   sx={{
                      transition: 'transform 0.6s ease',
                      '.MuiCard-root:hover &': { transform: 'scale(1.1)' },
                   }}
                />
                <Box
                   sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(13,59,15,0.3) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      '.MuiCard-root:hover &': { opacity: 1 },
                   }}
                />
             </Box>
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <Box
                     sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: `${color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                     }}>
                     <Icon sx={{ color, fontSize: 22 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
                     {t(`highlights.${key}`)}
                  </Typography>
               </Box>
               <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t(`highlights.${key}Desc`)}
               </Typography>
            </CardContent>
         </Card>
      </motion.div>
   );
}

export default function Highlights({ t }) {
   return (
      <Box id="highlights" sx={{ py: { xs: 8, md: 12 }, background: '#F6FFF6' }}>
         <Container maxWidth="lg">
            <SectionTitle title={t('highlights.title')} />

            <Grid container spacing={3}>
               {HIGHLIGHTS.map((highlight, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={highlight.key}>
                     <HighlightCard
                        highlight={highlight}
                        image={IMAGES[index]}
                        index={index}
                        t={t}
                     />
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}
