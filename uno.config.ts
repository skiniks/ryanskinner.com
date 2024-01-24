import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [presetDaisy({ themes: ["dark"] }), presetIcons(), presetTypography(), presetUno()],

  transformers: [transformerDirectives()],
})
