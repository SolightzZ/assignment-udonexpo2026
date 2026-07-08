import Box from '@mui/material/Box';
import About from '../components/About';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Location from '../components/Location';
import Timeline from '../components/Timeline';
import VisitorInfo from '../components/VisitorInfo';

export default function Home() {
   return (
      <Box component="main" sx={{ overflowX: 'hidden' }}>
         <Hero />
         <About />
         <Highlights />
         <Gallery />
         <Timeline />
         <VisitorInfo />
         <Location />
         <Footer />
      </Box>
   );
}
