<script lang="ts" setup>
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title =>
    title ? `${title} - Ryan Skinner` : 'Ryan Skinner',
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
      { property: 'og:url', content: url },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        name: 'description',
        content:
          (route.meta.description as string)
          || `Ryan Skinner, a software engineer based in Toronto, Canada, excels in enhancing the web with his expertise in React, and server-side technologies to create high-performance, search-optimized web applications. Focused on improving the developer experience and leveraging the power of web components, Ryan's work embodies the pinnacle of modern web development.`,
      },
      {
        property: 'og:description',
        content:
          (route.meta.description as string)
          || `Ryan Skinner, a software engineer based in Toronto, Canada, excels in enhancing the web with his expertise in React, and server-side technologies to create high-performance, search-optimized web applications. Focused on improving the developer experience and leveraging the power of web components, Ryan's work embodies the pinnacle of modern web development.`,
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
