<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  href?: string
}

defineProps<Props>()
</script>
