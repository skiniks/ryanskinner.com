import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { rari } from 'rari/vite'
import { defineConfig } from 'vite-plus'
import { fmt, lint } from '@rari/lint/vite'

export default defineConfig({
  plugins: [
    rari({
      compiler: true,
      csp: {
        scriptSrc: ['\'self\'', '\'unsafe-inline\'', 'https://www.googletagmanager.com'],
        connectSrc: ['\'self\'', 'ws:', 'wss:', 'https://www.google-analytics.com', 'https://www.googletagmanager.com'],
      },
      cacheControl: {
        routes: {
          '/': 'public, max-age=86400, stale-while-revalidate=86400',
        },
      },
      cache: {
        maxBytes: 24 * 1024 * 1024,
        layers: {
          response: { maxEntries: 40 },
          layout: { maxEntries: 40 },
          image: { maxEntries: 20 },
          og: { maxEntries: 20 },
          fetch: { maxEntries: 32 },
        },
      },
      images: {
        deviceSizes: [1920],
        imageSizes: [384, 640, 750, 828, 1080, 1200, 1920],
        qualityAllowlist: [25, 50, 75, 100],
        localPatterns: [
          {
            pathname: '/images/**',
          },
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  fmt,
  lint,
})
