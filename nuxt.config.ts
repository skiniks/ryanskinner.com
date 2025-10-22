export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
    },
  },

  build: { transpile: ['shiki'] },

  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['js', 'ts', 'tsx', 'json', 'vue', 'rust'],
          theme: 'material-theme-palenight',
        },
      },
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },

  css: ['@unocss/reset/tailwind.css', '@/assets/main.css'],
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    'magic-regexp/nuxt',
    'nuxt-og-image',
    '@nuxt/scripts',
  ],

  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-2PTW34K8LT',
      },
    },
  },

  site: {
    url: 'https://ryanskinner.com',
  },

  srcDir: 'src',
  compatibilityDate: '2025-07-28',
})
