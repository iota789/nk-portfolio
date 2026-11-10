import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// GitHub Pages serves this repo at https://iota789.github.io/portfolio/,
// so production builds need that sub-path. Dev server stays at '/'.
const PAGES_BASE = '/portfolio/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? PAGES_BASE : '/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
