// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  components: true,
  modules: ['nuxt-windicss', '@nuxt/image-edge', '@nuxtjs/robots'],
  typescript: {
    strict: true,
  },
})
