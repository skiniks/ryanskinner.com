export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
    },
  },

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

  experimental: {
    componentIslands: true,
    payloadExtraction: true,
  },

  devtools: { enabled: true },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-og-image',
    'nuxt-time',
  ],

  srcDir: 'src',
})
