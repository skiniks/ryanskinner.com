export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxtjs/robots'],
  typescript: {
    strict: true,
  },
})
