import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetTypography()],
  safelist: 'h-6 w-6 ml-2 invisible'.split(' ')
})
