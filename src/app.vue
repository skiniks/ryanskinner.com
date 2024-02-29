<script lang="ts" setup>
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Ryan Skinner` : 'Ryan Skinner'),
})

if (import.meta.server) {
  const PATH_RE = createRegExp(
    exactly(char.times.any().and(charNotIn('/')))
      .as('path')
      .and(exactly('/').optionally())
      .at.lineEnd(),
  )

  const { path = '/' } = route.fullPath.match(PATH_RE)?.groups ?? {}
  const url = `https://ryanskinner.com${path}`

  useServerHead({
    meta: () => [
      {
        name: 'description',
        content:
          (route.meta.description as string)
          || `Ryan Skinner, a Toronto-based creative software developer, is dedicated to pushing the boundaries of the modern web with exceptional design and an enhanced developer experience. With a passion for crafting beautiful, accessible, and high-performing web applications, Ryan has collaborated with a diverse range of clients and utilized various technologies to bring innovative solutions to life.`,
      },
      {
        property: 'og:description',
        content:
          (route.meta.description as string)
          || `Ryan Skinner, a Toronto-based creative software developer, is dedicated to pushing the boundaries of the modern web with exceptional design and an enhanced developer experience. With a passion for crafting beautiful, accessible, and high-performing web applications, Ryan has collaborated with a diverse range of clients and utilized various technologies to bring innovative solutions to life.`,
      },
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'mask-icon', color: '#fff', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
    ],
  })
}
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
