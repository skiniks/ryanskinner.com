import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { rari } from 'rari/vite'
import { defineConfig } from 'rolldown-vite'

export default defineConfig({
  plugins: [
    rari({
      csp: {
        scriptSrc: ['\'self\'', '\'unsafe-inline\'', 'https://www.googletagmanager.com'],
        connectSrc: ['\'self\'', 'ws:', 'wss:', 'https://www.google-analytics.com', 'https://www.googletagmanager.com'],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
