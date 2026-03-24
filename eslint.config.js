import { antfu } from '@antfu/eslint-config'
import deMorgan from 'eslint-plugin-de-morgan'
import oxlint from 'eslint-plugin-oxlint'

export default antfu(
  {
    react: true,
    typescript: true,
  },
  {
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['if', 'for', 'while', 'switch'], next: 'return' },
        { blankLine: 'always', prev: 'block-like', next: 'return' },
      ],
    },
  },
  {
    files: ['src/app/**'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  deMorgan.configs.recommended,
  ...oxlint.buildFromOxlintConfigFile(`${import.meta.dirname}/vite.config.ts`),
)
