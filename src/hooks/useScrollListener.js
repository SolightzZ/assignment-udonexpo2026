import { useEffect, useRef } from 'react';

// Custom Hook สำหรับดักฟัง Event การเลื่อนหน้าจอ (Scroll)
// โดยมีการใช้ requestAnimationFrame (rAF) เข้ามาช่วยจัดระเบียบ (Throttle) การทำงาน
// เพื่อป้องกันไม่ให้ฟังก์ชัน onScroll ถูกเรียกถี่เกินไปจนทำให้เว็บไซต์กระตุก (Performance optimization)
export default function useScrollListener(onScroll, enabled = true) {
   const rafId = useRef(0);

   useEffect(() => {
      if (!enabled) return;
      
      const handler = () => {
         // ยกเลิกคิว rAF เดิมที่ยังไม่ทันได้ทำงาน (ถ้ามี)
         cancelAnimationFrame(rafId.current);
         
         // นำ onScroll ไปเข้าคิวรอทำงานในเฟรมถัดไปของหน้าจอ (มักจะล็อคที่ 60fps)
         rafId.current = requestAnimationFrame(() => {
            onScroll(window.scrollY);
         });
      };
      
      // ผูก Event แบบ passive: true ช่วยให้ Browser ไม่ต้องรอฟังก์ชันนี้ทำงานเสร็จก่อนถึงจะยอมเลื่อนหน้าจอ
      window.addEventListener('scroll', handler, { passive: true });
      
      return () => {
         window.removeEventListener('scroll', handler);
         cancelAnimationFrame(rafId.current); // Cleanup คิวที่ค้างอยู่ตอน Component ถูก Unmount
      };
   }, [onScroll, enabled]);
}
