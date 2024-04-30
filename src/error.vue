<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <NuxtLayout>
    <img
      v-if="error.statusCode === 404"
      src="/images/notfound.png"
      alt="Page Not Found"
      class="max-w-4xl mx-auto"
    >
    <h1 v-else>
      An error occurred
    </h1>
  </NuxtLayout>
</template>
