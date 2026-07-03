import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'gh-pages-redirect',
      closeBundle() {
        const distDir = resolve(__dirname, 'dist')
        if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true })
        writeFileSync(
          resolve(distDir, '404.html'),
          '<!doctype html><script>sessionStorage.redirect=location.href</script><meta http-equiv=refresh content="0;url=/"><script>var a=sessionStorage.redirect,b=location.href;if(a&&a!==b&&!a.includes("."))history.replaceState(null,"",a)</script>'
        )
      },
    },
  ],
  base: '/',
  build: {
    sourcemap: false,
  },
})
