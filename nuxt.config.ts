export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '~/assets/css/typography.css',
    'animate.css/animate.min.css',
    'swiper/swiper-bundle.min.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    'nuxt-purgecss',
  ],
  typescript: {
    strict: true,
  },
})
