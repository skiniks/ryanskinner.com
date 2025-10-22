export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ryan Skinner',
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-2PTW34K8LT',
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PTW34K8LT');
          `,
        },
      ],
    },
  },

  build: { transpile: ['shiki'] },

  colorMode: {
    preference: 'dark',
    dataValue: 'theme',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['js', 'ts', 'tsx', 'json', 'vue', 'rust'],
          theme: 'material-theme-palenight',
        },
      },
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },

  css: ['@unocss/reset/tailwind.css', '@/assets/main.css'],
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    'magic-regexp/nuxt',
    'nuxt-og-image',
  ],

  site: {
    url: 'https://ryanskinner.com',
  },

  srcDir: 'src',
  compatibilityDate: '2025-07-28',
})
