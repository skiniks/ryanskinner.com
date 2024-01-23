export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
  ],

  srcDir: 'src',
})
