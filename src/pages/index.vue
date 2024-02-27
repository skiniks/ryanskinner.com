<script setup lang="ts">
const pageTitle = 'Home'

defineOgImageScreenshot()

useSeoMeta({
  title: pageTitle,
})
</script>

<template>
  <Hero />
  <RecentPosts />
  <LogoGrid />
</template>
