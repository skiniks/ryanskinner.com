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
          || `Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web. Building fast and scalable digital solutions that developers love to work with.`,
      },
      {
        property: 'og:description',
        content:
          (route.meta.description as string)
          || `Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web. Building fast and scalable digital solutions that developers love to work with.`,
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
