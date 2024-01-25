<script lang="ts" setup>
const route = useRoute()

const url = computed(() => {
  if (route.path === '/')
    return 'https://ryanskinner.com'

  return `https://ryanskinner.com${route.path}`
})

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Ryan Skinner` : 'Ryan Skinner'),
})
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
