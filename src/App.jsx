import { MotionConfig } from 'framer-motion';
import { lazy, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import HeritageBackdrop from './components/HeritageBackdrop';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader/PageLoader';
import RouteErrorBoundary from './components/RouteErrorBoundary/RouteErrorBoundary';
import { Box } from '@mui/material';

const Home = lazy(() => import('./pages/Home'));
const Tech = lazy(() => import('./pages/Tech'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
   const { i18n: i18nInstance } = useTranslation();

   // ฟังก์ชันจัดการตอนที่ผู้ใช้กดเปลี่ยนภาษาจาก Navbar หรือเมนู
   const handleLanguageChange = useCallback(
      ({ nextLang }) => {
         i18nInstance.changeLanguage(nextLang);
         document.documentElement.lang = nextLang; // เปลี่ยน lang attribute บน <html> เพื่อ SEO และ Accessibility
      },
      [i18nInstance],
   );

   return (
      <RouteErrorBoundary>
         {/* MotionConfig: ตั้งค่าให้ปิด Animation อัตโนมัติหาก OS ของผู้ใช้เปิดโหมด Reduced Motion ไว้ (Accessibility) */}
         <MotionConfig reducedMotion="user">
            <HeritageBackdrop />

            {/* Suspense: รอให้ Component ที่ถูก Lazy Load ดาวน์โหลดเสร็จก่อนแล้วค่อยแสดงผล */}
            <Suspense fallback={<PageLoader />}>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <Box>
                           <Navbar onLanguageChanging={handleLanguageChange} />
                           <Home />
                        </Box>
                     }
                  />
                  <Route
                     path="/tech"
                     element={
                        <Box>
                           <Navbar onLanguageChanging={handleLanguageChange} />
                           <Tech />
                        </Box>
                     }
                  />
                  {/* หากเข้า URL ที่ไม่มีอยู่ในระบบ ให้ไปหน้า NotFound */}
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </Suspense>
         </MotionConfig>
      </RouteErrorBoundary>
   );
}
