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

useServerHead({
  meta: () => [
    { name: 'theme-color', content: '#1a202c' },
    { name: 'msapplication-TileColor', content: '#1a202c' },
    { property: 'og:url', content: url },
    // {
    //   property: 'og:image',
    //   content: '',
    //   key: 'og:image',
    // },
    // { property: 'og:image:width', content: '1200' },
    // { property: 'og:image:height', content: '630' },
    {
      property: 'og:title',
      content: (route.meta.title as string) || 'Ryan Skinner',
    },
    {
      name: 'description',
      content:
          (route.meta.description as string)
          || 'The personal website of Full Stack Developer, Ryan Skinner',
    },
    {
      property: 'og:description',
      content:
          (route.meta.description as string)
          || 'The personal website of Full Stack Developer, Ryan Skinner',
    },
  ],
})
</script>

<template>
  <div id="app" class="overflow-x-hidden min-h-screen flex flex-col">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
