<script setup lang="ts">
const pageTitle = 'Posts'

defineOgImageComponent('Default', {
  bgColor: 'bg-gray-800',
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
