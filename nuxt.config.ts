export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  experimental: {
    componentIslands: true,
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-time'
  ],

  srcDir: 'src',
})
