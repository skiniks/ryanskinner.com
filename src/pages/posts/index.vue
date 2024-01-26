<script setup lang="ts">
const pageTitle = 'Posts I\'ve Written'

defineOgImageComponent('NuxtSeo', { title: pageTitle })
useSeoMeta({ title: pageTitle })
</script>

<template>
  <div class="p-8 md:p-12">
    <PostList />
  </div>
</template>
