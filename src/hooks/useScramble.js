import { useEffect, useRef, useState } from 'react';

// เซ็ตตัวอักษรที่จะสุ่มสลับออกมา (มีทั้งภาษาอังกฤษ, ตัวเลข, สัญลักษณ์ Block, และอักษรจีน/ญี่ปุ่นประปราย)
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789▓░▒█的一是不了人有山川花木森水火土金';

// ฟังก์ชันสุ่มดึงตัวอักษร 1 ตัวจาก CHARSET
function randomChar() {
   return CHARSET[Math.floor(Math.random() * CHARSET.length)];
}

// ฟังก์ชันแปลงข้อความทุกตัวอักษรให้กลายเป็นตัวสุ่มทั้งหมด (สำหรับตอนเริ่ม Animation)
function randomizeAll(text) {
   return text
      .split('')
      .map(() => randomChar())
      .join('');
}

// ฟังก์ชันคำนวณการเผยข้อความจริงตาม Progress (0-1) ของ Animation
function revealText(text, progress) {
   const words = text.split(' '); // แยกเป็นคำๆ เพื่อให้ทยอยสุ่มเผยทีละคำ
   const totalWords = words.length;

   return words
      .map((word, wordIndex) => {
         // แบ่งช่วงเวลา Animation ให้แต่ละคำทยอยปรากฏเหลื่อมกัน
         const wordStart = (wordIndex / totalWords) * 0.4;
         const wordEnd = wordStart + 0.6;
         // คำนวณ Progress ย่อยของคำๆ นี้ ว่าเสร็จไปกี่ % แล้ว (0-1)
         const wordProgress = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));

         // ถ้าระยะเวลาของคำนี้ยังไม่ถึงให้สุ่ม 100%
         if (wordProgress <= 0) return randomizeAll(word);
         // ถ้าเสร็จแล้วโชว์คำจริงๆ เลย
         if (wordProgress >= 1) return word;

         // ถ้าอยู่ระหว่างทาง ให้เผยตัวอักษรจริงจากซ้ายไปขวา และสุ่มตัวที่ยังเผยไม่ถึง
         const chars = word.split('');
         const revealCount = Math.floor(wordProgress * chars.length);

         return chars.map((char, i) => (i < revealCount ? char : randomChar())).join('');
      })
      .join(' '); // ประกอบกลับเป็นประโยค
}

// Custom Hook สำหรับทำ Text Scramble (สุ่มตัวอักษรแล้วค่อยๆ เผยข้อความจริง)
export default function useScramble(text, { duration = 600, delay = 0 } = {}) {
   // สร้าง State เก็บข้อความที่แสดงผล โดยค่าเริ่มต้นจะให้สุ่มมั่วทั้งหมด
   const [display, setDisplay] = useState(() => randomizeAll(text));
   const rafRef = useRef(null);

   useEffect(() => {
      const startAnimation = () => {
         const startTime = performance.now();
         
         // ฟังก์ชันรันแต่ละเฟรมผ่าน requestAnimationFrame เพื่อให้ลื่นไหล 60fps
         const tick = (now) => {
            // คำนวณหาว่ารันไปแล้วกี่ % จากระยะเวลา (duration) ที่ตั้งไว้
            const progress = Math.min((now - startTime) / duration, 1);
            
            if (progress >= 1) {
               // ถ้า Animation จบแล้ว ให้โชว์ข้อความจริงและหยุด Loop
               setDisplay(text);
               return;
            }
            
            // อัปเดตข้อความใหม่ในเฟรมนี้
            setDisplay(revealText(text, progress));
            rafRef.current = requestAnimationFrame(tick);
         };
         rafRef.current = requestAnimationFrame(tick);
      };

      let timerId;
      // ถ้ามีการตั้ง Delay ไว้ ให้รอตามระยะเวลาก่อนเริ่ม Animation
      if (delay > 0) {
         timerId = setTimeout(startAnimation, delay);
      } else {
         startAnimation();
      }

      // Cleanup ฟังก์ชันเมื่อ Component ถูกถอดถอน หรือ text/delay/duration เปลี่ยน
      return () => {
         clearTimeout(timerId);
         if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
   }, [text, duration, delay]);

   return display;
}
