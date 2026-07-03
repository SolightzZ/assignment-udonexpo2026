import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ForestIcon from '@mui/icons-material/Forest';
import HandymanIcon from '@mui/icons-material/Handyman';
import PublicIcon from '@mui/icons-material/Public';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import imgActivity from '../assets/images/highlight_activity.jpg';
import imgCulture from '../assets/images/highlight_culture.jpg';
import imgFood from '../assets/images/highlight_food.jpg';
import imgGarden from '../assets/images/highlight_garden.jpg';
import imgIllumination from '../assets/images/highlight_illumination.jpg';
import imgInnovation from '../assets/images/highlight_innovation.jpg';
import imgIntl from '../assets/images/highlight_intl.jpg';
import imgPlayground from '../assets/images/highlight_playground.jpg';
import ScrambleText from './ScrambleText';
import SectionTitle from './SectionTitle';
import IconCircle from './IconCircle';
import Reveal from './Reveal';

const HIGHLIGHTS = [
   { key: 'gardens', icon: ForestIcon, color: '#2E7D32', image: imgGarden },
   { key: 'international', icon: PublicIcon, color: '#1565C0', image: imgIntl },
   { key: 'activities', icon: HandymanIcon, color: '#E65100', image: imgActivity },
   { key: 'food', icon: RestaurantIcon, color: '#C62828', image: imgFood },
   { key: 'culture', icon: TheaterComedyIcon, color: '#6A1B9A', image: imgCulture },
   { key: 'innovation', icon: EnergySavingsLeafIcon, color: '#00695C', image: imgInnovation },
   { key: 'illumination', icon: AutoAwesomeIcon, color: '#FFB300', image: imgIllumination },
   { key: 'playground', icon: ChildCareIcon, color: '#43A047', image: imgPlayground },
];

function HighlightCard({ highlight, index, t }) {
   const { key, icon: Icon, color, image } = highlight;

   return (
      <Reveal y={40} delay={index * 0.1} style={{ height: '100%' }}>
         <Card
            tabIndex={0}
            sx={{
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               borderRadius: '32px',
               overflow: 'hidden',
               background: '#fff',
               boxShadow: '0 12px 35px rgba(30,80,40,.10)',
               transition: 'transform .35s ease, box-shadow .35s ease',
               '&:focus-visible': { outline: '3px solid #C8A64E', outlineOffset: 2 },
               '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 22px 55px rgba(30,80,40,.18)',
               },
            }}>
            <Box sx={{ overflow: 'hidden', aspectRatio: '16 / 9' }}>
               <CardMedia
                  component="img"
                  image={image}
                  alt={t(`highlights.${key}`)}
                  loading="lazy"
                  sx={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     transition: 'transform .4s ease',
                     '.MuiCard-root:hover &': { transform: 'scale(1.08)' },
                  }}
               />
            </Box>
            <CardContent sx={{ p: 4, flexGrow: 1 }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                  <IconCircle icon={Icon} color={color} size={56} iconSize={28} />
                  <ScrambleText
                     text={t(`highlights.${key}`)}
                     variant="h6"
                     sx={{ fontWeight: 700, fontSize: '1.55rem', lineHeight: 1.2 }}
                  />
               </Box>
               <ScrambleText
                  text={t(`highlights.${key}Desc`)}
                  sx={{ color: '#555', fontSize: '1rem', lineHeight: 1.9 }}
               />
            </CardContent>
         </Card>
      </Reveal>
   );
}

export default function Highlights({ t }) {
   return (
      <Box
         id="highlights"
         sx={{
            py: { xs: 8, md: 12 },
            background: 'linear-gradient(180deg,#F8FFF8 0%,#F3FBF3 100%)',
         }}>
         <Box sx={{ width: '100%', maxWidth: 1320, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
            <SectionTitle title={t('highlights.title')} />

            <Grid container spacing={{ xs: 3, md: 4 }}>
               {HIGHLIGHTS.map((highlight, index) => (
                  <Grid
                     size={{ xs: 12, sm: 6, lg: 4 }}
                     key={highlight.key}
                     sx={{ display: 'flex' }}>
                     <HighlightCard highlight={highlight} index={index} t={t} />
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   );
}
