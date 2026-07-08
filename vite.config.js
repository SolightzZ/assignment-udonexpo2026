import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      {
         name: 'gh-pages-redirect',
         closeBundle() {
            const distDir = resolve(__dirname, 'dist');
            if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });
            writeFileSync(
               resolve(distDir, '404.html'),
               `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>404 - Udon Expo 2026</title>
<link rel="icon" type="image/svg+xml" href="/assignment-udonexpo2026/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Noto+Sans+Thai:wght@400;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a1f10;font-family:'Poppins','Noto Sans Thai',sans-serif;overflow:hidden}
body::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 50%,rgba(27,94,32,.25),transparent 60%),radial-gradient(ellipse at 80% 30%,rgba(200,166,78,.12),transparent 50%)}
.wrap{text-align:center;position:relative;z-index:1;padding:2rem}
.code{font-size:clamp(5rem,15vw,12rem);font-weight:800;background:linear-gradient(135deg,#4CAF50,#C8A64E);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;letter-spacing:-0.04em}
.divider{width:80px;height:3px;background:linear-gradient(90deg,transparent,#C8A64E,transparent);border-radius:2px;margin:1.5rem auto}
.msg{color:rgba(255,255,255,.7);font-size:1rem;font-weight:300;margin-bottom:2rem;line-height:1.6}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 2rem;border-radius:999px;background:linear-gradient(135deg,#1B5E20,#2E7D32);color:#fff;font-weight:600;font-size:.9rem;text-decoration:none;transition:transform .3s,box-shadow .3s;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(27,94,32,.35)}
.btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(27,94,32,.45)}
.ring{position:absolute;width:220px;height:220px;border:1px solid rgba(200,166,78,.1);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:ring 8s linear infinite}
.ring:nth-child(2){width:320px;height:320px;animation-duration:12s;animation-direction:reverse;opacity:.5}
@keyframes ring{0%{transform:translate(-50%,-50%) rotate(0deg)}100%{transform:translate(-50%,-50%) rotate(360deg)}}
</style>
</head>
<body>
<div class="ring"></div>
<div class="ring"></div>
<div class="wrap">
<div class="code">404</div>
<div class="divider"></div>
<p class="msg">หน้านี้ไม่มีอยู่จริง<br>This page doesn't exist</p>
<a class="btn" href="/assignment-udonexpo2026/">กลับสู่หน้าหลัก &rarr;</a>
</div>
<script>
sessionStorage.redirect=location.href;
setTimeout(function(){location.href='/assignment-udonexpo2026/'},5000);
var a=sessionStorage.redirect,b=location.href;
if(a&&a!==b&&a.startsWith(location.origin+'/assignment-udonexpo2026/'))history.replaceState(null,"",a);
sessionStorage.removeItem('redirect');
</script>
</body>
</html>`,
            );
         },
      },
   ],
   base: '/assignment-udonexpo2026/',
   build: {
      sourcemap: false,
      rollupOptions: {
         output: {
            manualChunks(id) {
               if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) return 'vendor-react';
               if (id.includes('node_modules/@mui/') || id.includes('node_modules/@emotion/')) return 'vendor-mui';
               if (id.includes('node_modules/framer-motion')) return 'vendor-framer';
               if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) return 'vendor-i18n';
            },
         },
      },
   },
});
