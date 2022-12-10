import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./components/**/*.{vue,js}', './pages/**/*.vue', './app.vue'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        animationDelaySpeed: 1000,
        heartBeatSpeed: 1000,
      },
    }),
  ],
})
