<script setup lang="ts">
const pageTitle = 'Posts'

defineOgImageScreenshot()

useSeoMeta({
  title: pageTitle,
})
</script>

<template>
  <div class="p-8 md:p-12">
    <PostList />
  </div>
</template>
