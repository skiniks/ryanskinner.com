export default defineNuxtConfig({
  ssr: false,
  components: true,
  modules: ['nuxt-windicss', '@nuxt/image-edge', '@nuxtjs/robots'],
  typescript: {
    strict: true,
  },
})
