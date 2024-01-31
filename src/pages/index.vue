<script setup lang="ts">
const pageTitle = 'Home'
const pageDescription = 'Welcome to the homepage of Ryan Skinner, Software Developer.'

defineOgImageComponent('NuxtSeo', {
  title: 'Ryan Skinner',
  description: pageDescription,
})

useSeoMeta({
  title: pageTitle,
})
</script>

<template>
  <Hero />
  <LogoGrid />
</template>
