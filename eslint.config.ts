import rari from '@rari/lint/eslint'

export default [
  ...rari,
  {
    files: ['package.json', '**/package.json'],
    rules: {
      'pnpm/json-enforce-catalog': 'off',
    },
  },
]
