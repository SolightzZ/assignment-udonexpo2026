import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { MotionConfig } from 'framer-motion';
import { Component, lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import HeritageBackdrop from './components/HeritageBackdrop';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import i18n from './i18n';

const Home = lazy(() => import('./pages/Home'));
const Tech = lazy(() => import('./pages/Tech'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
         }}>
         <CircularProgress color="primary" />
      </Box>
   );
}

class RouteErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }
   static getDerivedStateFromError() {
      return { hasError: true };
   }
   render() {
      if (this.state.hasError) {
         return (
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh',
                  gap: 2,
                  p: 3,
                  textAlign: 'center',
               }}>
               <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                  {i18n.t('error.title')}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 400 }}>
                  {i18n.t('error.message')}
               </Typography>
               <Button variant="contained" onClick={() => window.location.reload()}>
                  {i18n.t('error.reload')}
               </Button>
            </Box>
         );
      }
      return this.props.children;
   }
}

export default function App() {
   const { i18n: i18nInstance } = useTranslation();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3500);
      return () => clearTimeout(timer);
   }, []);

   const handleLanguageChange = useCallback(
      ({ nextLang }) => {
         i18nInstance.changeLanguage(nextLang);
         document.documentElement.lang = nextLang;
      },
      [i18nInstance],
   );

   return (
      <RouteErrorBoundary>
         <MotionConfig reducedMotion="user">
            <HeritageBackdrop />
            <LoadingScreen loading={loading} />
            <Suspense fallback={<PageLoader />}>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <>
                           <Navbar onLanguageChanging={handleLanguageChange} />
                           <Home />
                        </>
                     }
                  />
                  <Route
                     path="/tech"
                     element={
                        <>
                           <Navbar onLanguageChanging={handleLanguageChange} />
                           <Tech />
                        </>
                     }
                  />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Suspense>
         </MotionConfig>
      </RouteErrorBoundary>
   );
}
