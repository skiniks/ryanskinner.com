<script setup lang="ts">
const pageTitle = 'Home'

defineOgImageComponent('Default', {
  bgColor: 'bg-gray-800',
})

useSeoMeta({
  title: pageTitle,
})
</script>

<template>
  <Hero />
  <RecentPosts />
  <LogoGrid />
</template>
