export default defineNuxtConfig({
  ssr: false,
  css: ['animate.css/animate.min.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/robots'],
  typescript: {
    strict: true,
  },
})
