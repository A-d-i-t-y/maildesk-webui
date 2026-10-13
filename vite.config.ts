/// <reference types="vitest/config" />
import { configDefaults } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { version } from './package.json' with { type: 'json' }

// Mail server to connect to in dev (set your URL here).
const SERVER_URL = 'https://mailserver.thejerk.in'

const proxyTo = {
  target: SERVER_URL,
  changeOrigin: true,
  secure: true,
}

export default defineConfig({
  base: './',
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/.well-known': proxyTo,
      '/auth': proxyTo,
      '/api': proxyTo,
      '/jmap': proxyTo,
    },
  },
  test: {
    globals: false,
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, '**/.ignore/**'],
  },
})