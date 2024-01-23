import { defineConfig, presetIcons, presetTypography, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetIcons(), presetTypography(), presetUno()],

  transformers: [transformerDirectives()],
})
