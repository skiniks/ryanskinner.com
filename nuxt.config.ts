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
    highlight: {
      preload: ['js', 'ts', 'json', 'vue'],
      theme: 'material-theme-palenight',
    },
  },

  css: ['@unocss/reset/tailwind.css', '@/assets/main.css'],
  devtools: { enabled: true },

  experimental: {
    headNext: true,
    viewTransition: true,
    componentIslands: true,
    payloadExtraction: true,
    typedPages: true,
  },

  future: {
    typescriptBundlerResolution: true,
  },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    'magic-regexp/nuxt',
    'nuxt-og-image',
    'nuxt-time',
  ],

  site: {
    url: 'https://ryanskinner.com',
  },

  srcDir: 'src',
  compatibilityDate: '2024-09-02',
})
