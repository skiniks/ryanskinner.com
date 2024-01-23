export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
    },
  },

  css: ['@unocss/reset/tailwind.css', '~/assets/main.css'],

  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
  ],

  srcDir: 'src',
})
