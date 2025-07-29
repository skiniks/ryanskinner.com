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
        'table': {
          'display': 'table',
          'border-collapse': 'collapse',
          'margin': '1.5rem 0',
          'width': '100%',
          'border': '1px solid var(--muted)',
          'background-color': 'var(--accent)',
          'border-radius': '0.5rem',
          'overflow': 'hidden',
          'box-shadow':
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'table-layout': 'fixed',
        },
        'thead': {
          'background-color': 'var(--background)',
          'width': '100%',
        },
        'tbody': {
          width: '100%',
        },
        'tbody tr': {
          width: '100%',
          display: 'table-row',
          transition: 'background-color 0.2s ease',
        },
        'thead tr': {
          width: '100%',
          display: 'table-row',
        },
        'thead th': {
          'padding': '0.75rem 1rem',
          'text-align': 'left',
          'font-weight': '600',
          'color': 'var(--primary)',
          'border-bottom': '2px solid var(--muted)',
          'border-right': '1px solid var(--muted)',
        },
        'thead th:last-child': {
          'border-right': 'none',
        },

        'tbody tr:nth-child(even)': {
          'background-color': 'rgba(128, 128, 128, 0.05)',
        },
        'tbody tr:hover': {
          'background-color': 'rgba(128, 128, 128, 0.1)',
        },
        'tbody td': {
          'padding': '0.75rem 1rem',
          'color': 'var(--primary)',
          'border-bottom': '1px solid var(--muted)',
          'border-right': '1px solid var(--muted)',
        },
        'tbody td:last-child': {
          'border-right': 'none',
        },
        'tbody tr:last-child td': {
          'border-bottom': 'none',
        },
        'table code': {
          'background-color': 'var(--background)',
          'color': 'var(--primary)',
          'border': '1px solid var(--muted)',
          'border-radius': '0.25rem',
          'padding': '0.125rem 0.5rem',
          'font-size': '0.875rem',
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
