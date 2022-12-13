<template>
  <NuxtPage />
</template>
<script lang="ts" setup>
const app = useAppConfig()
useHead({
  title: app.name,
  titleTemplate: '%s — Frontend Developer based in Toronto, Ontario, Canada',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        'Ryan Skinner is a Designer and Frontend Developer based in Toronto, Ontario, Canada.',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
