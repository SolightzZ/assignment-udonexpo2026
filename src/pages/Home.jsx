import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Gallery from '../components/Gallery';
import Timeline from '../components/Timeline';
import VisitorInfo from '../components/VisitorInfo';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
   const { t } = useTranslation();
   return (
      <>
      <Hero t={t} />
          <About t={t} />
          <Highlights t={t} />
          <Gallery t={t} />
          <Timeline t={t} />
          <VisitorInfo t={t} />
          <Location t={t} />
          <Footer t={t} />
      </>
   );
}
