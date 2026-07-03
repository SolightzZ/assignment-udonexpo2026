import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const INFO_ITEMS = [
   { key: 'hours', icon: AccessTimeIcon, color: '#1B5E20' },
   { key: 'tickets', icon: ConfirmationNumberIcon, color: '#C8A64E' },
   { key: 'transport', icon: DirectionsBusIcon, color: '#1565C0' },
   { key: 'parking', icon: LocalParkingIcon, color: '#E65100' },
   { key: 'facilities', icon: AccessibilityNewIcon, color: '#6A1B9A' },
];

function InfoCard({ item, index, t }) {
   const { key, icon: Icon, color } = item;

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: '-60px' }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         style={{ height: '100%' }}>
         <Card
            sx={{
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               borderRadius: 4,
               p: 1,
               border: '2px solid transparent',
               transition: 'border-color 0.3s ease',
               '&:hover': {
                  borderColor: 'secondary.main',
               },
            }}>
            <CardContent sx={{ p: 3, flexGrow: 1 }}>
               <Box
                  sx={{
                     width: 52,
                     height: 52,
                     borderRadius: '50%',
                     background: `${color}12`,
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     mb: 2,
                  }}>
                  <Icon sx={{ color, fontSize: 26 }} />
               </Box>
               <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem', mb: 1 }}>
                  {t(`visitor.${key}`)}
               </Typography>
               <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t(`visitor.${key}Desc`)}
               </Typography>
            </CardContent>
         </Card>
      </motion.div>
   );
}

export default function VisitorInfo({ t }) {
   return (
      <Box id="visitor-info" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
         <Container maxWidth="lg">
            <SectionTitle title={t('visitor.title')} />

            <Grid container spacing={3}>
               {INFO_ITEMS.map((item, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.key}>
                     <InfoCard item={item} index={index} t={t} />
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}
