import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['content/**/*.md'],
  },

  presets: [
    presetIcons(),

    presetTypography({
      cssExtend: {
        'code::before': {
          content: 'none',
        },
        'code::after': {
          content: 'none',
        },
      },
    }),

    presetUno({ dark: { dark: '.dark-mode', light: '.light-mode' } }),
  ],

  theme: {
    colors: {
      primary: 'var(--primary)',
      accent: 'var(--accent)',
      muted: 'var(--muted)',
      background: 'var(--background)',
    },
  },

  transformers: [transformerDirectives()],
})
