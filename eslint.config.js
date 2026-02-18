import { antfu } from '@antfu/eslint-config'
import e18e from '@e18e/eslint-plugin'
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
  deMorgan.configs.recommended,
  e18e.configs.recommended,
  ...oxlint.buildFromOxlintConfigFile(`${import.meta.dirname}/.oxlintrc.json`),
)
