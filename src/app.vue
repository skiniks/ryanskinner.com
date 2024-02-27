<script lang="ts" setup>
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Ryan Skinner` : 'Ryan Skinner'),
})

useServerHead({
  meta: () => [
    {
      name: 'description',
      content:
        (route.meta.description as string) ||
        `Ryan Skinner's website — ryanskinner.com`,
    },
    {
      property: 'og:description',
      content:
        (route.meta.description as string) ||
        `Ryan Skinner's website — ryanskinner.com`,
    },
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
