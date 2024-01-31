<script lang="ts" setup>
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Ryan Skinner` : 'Ryan Skinner'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Ryan Skinner is a software engineer and web developer based in Toronto, Canada.'
    }
  ]
})
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
