<h1 align="center">Welcome to Udon Thani International Horticultural Expo 2026 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/SolightzZ/assignment-udonexpo2026#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/SolightzZ/assignment-udonexpo2026/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> เว็บไซต์โปรโมตการท่องเที่ยวสำหรับงาน **Udon Thani International Horticultural Expo 2026** พัฒนาด้วยเทคโนโลยี Frontend สมัยใหม่ (React 19 และ Material UI v9) โดยรองรับการแสดงผลหลายภาษา (Multilingual) และถูกออกแบบมาให้รองรับการใช้งานบนหลากหลายอุปกรณ์

### 🏠 [Repository](https://github.com/SolightzZ/assignment-udonexpo2026) &nbsp;&nbsp;|&nbsp;&nbsp; 🌍 [Live Demo (GitHub Pages)](https://SolightzZ.github.io/assignment-udonexpo2026/)

## 🚀 Tech Stack

โปรเจกต์นี้เลือกใช้ Modern Frontend Stack โดยคำนึงถึง Performance, Developer Experience และความง่ายในการบำรุงรักษา (Maintainability)

- **Framework:** [React 19 ![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
- **Build Tool:** [Vite 8 ![Vite](https://img.shields.io/badge/Vite_8-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
- **UI Component Library:** [MUI v9 (Material UI) ![MUI](https://img.shields.io/badge/MUI_v9-007FFF?style=flat&logo=mui&logoColor=white)](https://mui.com/)
- **Animation Engine:** [Framer Motion ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
- **Internationalization (i18n):** [i18next & react-i18next ![i18next](https://img.shields.io/badge/i18next-26A69A?style=flat&logo=i18next&logoColor=white)](https://react.i18next.com/)
- **Routing:** [React Router v7 ![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
- **Linting:** [Oxlint (Linter ที่พัฒนาด้วย Rust) ![Oxlint](https://img.shields.io/badge/Oxlint-000000?style=flat&logo=rust&logoColor=white)](https://oxc.rs/docs/guide/usage/linter.html)

## ✨ Features & Architecture

### 🌐 Internationalization (i18n)
รองรับการแสดงผล 3 ภาษา เพื่อรองรับผู้ใช้งานที่หลากหลาย:
- **ภาษาไทย (Thai)** — ค่าเริ่มต้น (Default)
- **ภาษาอังกฤษ (English)**
- **ภาษาจีนตัวย่อ (Chinese Simplified)**

การเปลี่ยนภาษาทำงานฝั่ง Client-side โดยใช้ข้อมูลจาก `localStorage` และทำงานร่วมกับการตั้งค่าบนเบราว์เซอร์

### 🎨 Design System & Theming
- **Nature-inspired Color Palette:** โทนสีหลักใช้ สีเขียวเข้ม (`#1B5E20`) ผสมผสานกับ สีทอง (`#C8A64E`) ซึ่งอ้างอิงจากอัตลักษณ์ของงานพืชสวนโลก
- **Modern UI Elements:** ใช้เทคนิค Glassmorphism (พื้นหลังโปร่งแสง) พร้อมการไล่ระดับสี ขอบมุมโค้งมน (`borderRadius: 20`) และการจัดวางเงาตกกระทบ
- **Typography:** เลือกใช้ฟอนต์ที่รองรับการแสดงผลในแต่ละภาษาอย่างเหมาะสม (`@fontsource/poppins`, `@fontsource/noto-sans-thai`, `@fontsource/noto-sans-sc`)

### ⚡ Performance & UX
- **Code Splitting & Lazy Loading:** ใช้งาน `React.lazy` และ `<Suspense>` เพื่อแบ่งโหลดส่วนของ Component (`Home`, `Tech`, `NotFound`) เฉพาะเมื่อมีความจำเป็น ช่วยลดขนาด Initial JavaScript Bundle
- **Fluid Animations:** นำ `framer-motion` มาจัดการ Animation บน UI เช่น Scroll-triggered Animations หรือการจำลองเอฟเฟกต์ต่าง ๆ
- **Loading Screen:** แสดงผลข้อมูลสถานะการดึงข้อมูลพื้นฐานก่อนเข้าสู่หน้าหลัก
- **Accessibility (a11y):** โครงสร้างรองรับ Semantic HTML, ARIA Labels และลดแอนิเมชันสำหรับผู้ใช้ที่เปิดการตั้งค่า `useReducedMotion()`

## 📋 Prerequisites

ตรวจสอบให้แน่ใจว่าได้ติดตั้งเครื่องมือเหล่านี้บนเครื่องคอมพิวเตอร์ของคุณแล้ว:
- Node.js (แนะนำ v18 ขึ้นไป)
- npm หรือ yarn

## 📦 Install

Clone repository และติดตั้ง Dependencies:

```sh
# Clone the repository
git clone https://github.com/SolightzZ/assignment-udonexpo2026.git

# Navigate to the project directory
cd assignment-udonexpo2026

# Install NPM dependencies
npm install
```

## 🛠 Usage (Development)

รันเซิร์ฟเวอร์สำหรับ Development ด้วย Vite (พร้อม HMR):

```sh
npm run dev
```

แอปพลิเคชันจะเปิดที่พอร์ต `http://localhost:5173/`

## 🏗️ Build (Production)

รันคำสั่งด้านล่างเพื่อสร้าง Production Build:

```sh
npm run build
```

ไฟล์ที่คอมไพล์สำเร็จจะอยู่ในโฟลเดอร์ `dist/`
หากต้องการทดสอบ Build บนเครื่อง Local ให้รันคำสั่ง:

```sh
npm run preview
```

## 🔍 Lint

ตรวจสอบความถูกต้องของโค้ดด้วย `oxlint`:

```sh
npm run lint
```

## 📂 Project Structure

โครงสร้างของโปรเจกต์และการจัดเก็บไฟล์:

```text
src/
├── assets/                  # Static assets (images, icons)
├── components/              # Reusable UI components
│   ├── NotFound/            # โฟลเดอร์รวมคอมโพเนนต์สำหรับหน้า 404
│   │   ├── NotFound.jsx
│   │   └── NotFound.styles.js
│   ├── Tech/                # โฟลเดอร์รวมคอมโพเนนต์สำหรับหน้า Tech Stack
│   │   ├── TechCategoryCard.jsx
│   │   └── TechIcons.jsx
│   ├── About.jsx            # ส่วนข้อมูลรายละเอียดของงาน Expo
│   ├── Countdown.jsx        # เวลานับถอยหลังสู่วันจัดงาน
│   ├── Footer.jsx           # ส่วนท้ายของเว็บไซต์
│   ├── Gallery.jsx          # แสดงแกลเลอรีรูปภาพ
│   ├── GoldenRing.jsx       # เอฟเฟกต์วงแหวนสีทอง
│   ├── Hero.jsx             # ส่วนต้อนรับด้านบนสุด (Hero Section)
│   ├── Highlights.jsx       # ไฮไลท์และฟีเจอร์เด่น
│   ├── IconCircle.jsx       # คอมโพเนนต์ไอคอนวงกลม
│   ├── LanguageSwitcher.jsx # ปุ่มสำหรับเปลี่ยนภาษา
│   ├── LoadingBackground.jsx# พื้นหลังสำหรับหน้าจอโหลด
│   ├── LoadingLogo.jsx      # โลโก้ในหน้าจอโหลด
│   ├── LoadingParticles.jsx # เอฟเฟกต์ละออง Particles ตอนโหลด
│   ├── LoadingProgress.jsx  # แถบแสดงสถานะการโหลด
│   ├── LoadingScreen.jsx    # หน้าจอ Loading หลัก
│   ├── Location.jsx         # ข้อมูลแผนที่และสถานที่จัดงาน
│   ├── Navbar.jsx           # แถบเมนูด้านบน (Navigation Bar)
│   ├── Reveal.jsx           # แอนิเมชันเปิดตัวคอนเทนต์ (Reveal Effect)
│   ├── ScrambleText.jsx     # แอนิเมชันถอดรหัสข้อความ (Scramble Effect)
│   ├── SectionTitle.jsx     # หัวข้อหลักของแต่ละ Section
│   ├── Timeline.jsx         # ไทม์ไลน์แสดงช่วงเวลาของงาน
│   └── VisitorInfo.jsx      # ข้อมูลสำหรับผู้เข้าร่วมงาน (ตั๋ว, การเดินทาง)
├── hooks/                   # Custom React hooks
│   └── useScramble.js       # Hook สำหรับทำแอนิเมชันข้อความ
├── locales/                 # ไฟล์ JSON สำหรับเก็บคำแปลภาษา (i18n)
│   ├── en/                  # ภาษาอังกฤษ
│   ├── th/                  # ภาษาไทย (Default)
│   └── zh/                  # ภาษาจีนตัวย่อ
├── pages/                   # Route-level components
│   ├── Home.jsx             # หน้า Landing Page หลัก
│   ├── Tech.jsx             # หน้าแสดง Tech Stack ของโปรเจกต์
│   └── NotFound.jsx         # หน้า Error 404 Fallback
├── theme/                   # Global Design System
│   └── theme.js             # การตั้งค่า MUI Custom Theme และชุดสี
├── App.jsx                  # Root Component (Routing, Error Boundary, Suspense)
├── main.jsx                 # Application Entry Point (ThemeProvider)
└── i18n.js                  # ไฟล์คอนฟิกของ i18next และ Language Detector
```

## 🗺️ Page Layouts & Components

- **Loading Screen:** หน้าจอสถานะการโหลดข้อมูลพัฒนาด้วย Framer Motion
- **Hero:** หน้าจอต้อนรับแสดงรูปภาพและตัวอักษร
- **About:** อธิบายรายละเอียด วันจัดงาน และข้อมูลเบื้องต้น
- **Highlights:** แสดงข้อมูลจุดสนใจผ่าน Feature Cards
- **Gallery:** ระบบแสดงแกลเลอรีรูปภาพสไตล์ Masonry Grid ใช้งานร่วมกับ `MUI Modal`
- **Timeline:** ไทม์ไลน์กำหนดการกิจกรรม
- **Visitor Info:** ข้อมูลที่จำเป็นสำหรับผู้เข้าชม เช่น เวลาเปิด-ปิด ตั๋ว การเดินทาง
- **Location:** พิกัดและการแสดงผลจาก Google Maps
- **Tech Stack (`/tech`):** หน้าแสดงผลเทคโนโลยีที่ใช้สร้างโปรเจกต์

## 👤 Author

**SolightzZ**

* GitHub: [@SolightzZ](https://github.com/SolightzZ)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check the [issues page](https://github.com/SolightzZ/assignment-udonexpo2026/issues) if you want to contribute.

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator) style references_
