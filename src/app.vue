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
          || `Ryan Skinner, a distinguished software engineer based in Toronto, Canada, excels in enhancing the web with his expertise in React, server-side technologies, and Nuxt to create high-performance, search-optimized web applications. Focused on improving the developer experience and leveraging the power of web components, Ryan's work embodies the pinnacle of modern web development. Through his commitment to exceptional design and performance, Ryan Skinner's portfolio showcases how he seamlessly integrates React components and Nuxt frameworks to elevate web applications, making them accessible, beautiful, and fast.`,
      },
      {
        property: 'og:description',
        content:
          (route.meta.description as string)
          || `Ryan Skinner, a distinguished software engineer based in Toronto, Canada, excels in enhancing the web with his expertise in React, server-side technologies, and Nuxt to create high-performance, search-optimized web applications. Focused on improving the developer experience and leveraging the power of web components, Ryan's work embodies the pinnacle of modern web development. Through his commitment to exceptional design and performance, Ryan Skinner's portfolio showcases how he seamlessly integrates React components and Nuxt frameworks to elevate web applications, making them accessible, beautiful, and fast.`,
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
