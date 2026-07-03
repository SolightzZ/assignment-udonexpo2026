import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import About from '../components/About';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Location from '../components/Location';
import Timeline from '../components/Timeline';
import VisitorInfo from '../components/VisitorInfo';
export default function Home() {
   const { t } = useTranslation();
   return (
      <Box>
         <Hero t={t} />
         <About t={t} />
         <Highlights t={t} />
         <Gallery t={t} />
         <Timeline t={t} />
         <VisitorInfo t={t} />
         <Location t={t} />
         <Footer t={t} />
      </Box>
   );
}
