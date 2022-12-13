export default defineNuxtConfig({
  css: ['~/assets/css/main.css', '~/assets/css/typography.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/robots'],
  typescript: {
    strict: true,
  },
})
