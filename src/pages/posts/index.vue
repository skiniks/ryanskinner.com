<script setup lang="ts">
const pageTitle = 'Posts I\'ve Written'
const pageDescription = 'Notes on development by Ryan Skinner.'

defineOgImageComponent('NuxtSeo', {
  title: pageTitle,
  description: pageDescription,
  type: 'article',
})

useSeoMeta({
  title: pageTitle,
})
</script>

<template>
  <div class="p-8 md:p-12">
    <PostList />
  </div>
</template>
