import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['content/**/*.md'],
  },

  presets: [presetIcons(), presetTypography(), presetUno({ dark: { dark: '.dark-mode', light: '.light-mode' } })],

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
