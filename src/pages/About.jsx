import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import { AboutHero, AboutBio, AboutContact } from '../components/AboutMe';

export default function About() {
  return (
    <Box>
      <AboutHero />
      <AboutBio />
      <AboutContact />
      <Footer />
    </Box>
  );
}
