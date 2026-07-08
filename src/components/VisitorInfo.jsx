import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { COLORS } from '../theme/theme';
import IconCircle from './IconCircle';
import Reveal from './Reveal';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ScrambleText from './ScrambleText';
import SectionTitle from './SectionTitle';

const INFO_ITEMS = [
    { key: 'hours', icon: AccessTimeIcon },
   { key: 'tickets', icon: ConfirmationNumberIcon },
   { key: 'transport', icon: DirectionsBusIcon },
   { key: 'parking', icon: LocalParkingIcon },
   { key: 'facilities', icon: AccessibilityNewIcon },
];

const InfoCard = memo(function InfoCard({ item, index }) {
   const { t } = useTranslation();
   const { key, icon: Icon } = item;
   const color = COLORS.visitorInfo[index];

   return (
      <Reveal delay={index * 0.1} style={{ width: '100%', height: '100%', display: 'flex' }}>
         <Card
            sx={{
               width: '100%',
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               borderRadius: '32px',
               cursor: 'pointer',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: (theme) => theme.palette.custom.cardShadow,
                transition: 'transform .3s ease, box-shadow .3s ease, border-color .3s ease',
                '&:hover': {
                   transform: 'translateY(-6px)',
                   boxShadow: (theme) => theme.palette.custom.cardShadowHover,
                  borderColor: 'secondary.main',
               },
            }}>
            <CardContent
               sx={{
                  p: { xs: 2, sm: 2.5, md: 3.5 },
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
               }}>
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, flexShrink: 0 }}>
                  <IconCircle icon={Icon} color={color} size={{ xs: 48, md: 56 }} iconSize={{ xs: 22, md: 26 }} />
                  <ScrambleText text={t(`visitor.${key}`)} variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.15rem' } }} />
               </Box>
               <ScrambleText
                  text={t(`visitor.${key}Desc`)}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                     flexGrow: 1,
                     lineHeight: 1.7,
                     fontSize: { xs: '.92rem', md: '.95rem' },
                     maxWidth: { md: 280 },
                  }}
               />
            </CardContent>
          </Card>
       </Reveal>
    );
});

export default function VisitorInfo() {
   const { t } = useTranslation();
   return (
      <Box id="visitor-info" sx={{ py: { xs: 6, md: 12 }, bgcolor: 'background.paper' }}>
         <Container sx={{ maxWidth: '1200px !important', px: { xs: 1.5, sm: 3 } }}>
            <SectionTitle title={t('visitor.title')} />

            <Box
               sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 3,
               }}>
               {INFO_ITEMS.map((item, index) => (
                  <Box
                     key={item.key}
                     sx={{
                        display: 'flex',
                        width: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(33.33% - 16px)' },
                     }}>
                      <InfoCard item={item} index={index} />
                  </Box>
               ))}
            </Box>
         </Container>
      </Box>
   );
}
