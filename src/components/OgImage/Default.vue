<script setup lang="ts">
const props = defineProps({
  bgColor: String,
})

const isClass = computed(() => props.bgColor?.startsWith('bg-'))
</script>

<template>
  <div
    class="flex h-full w-full items-center justify-center"
    :class="isClass ? [bgColor || 'bg-blue-500'] : []"
    :style="{ backgroundColor: !isClass ? `#${bgColor}` : undefined }"
  >
    <img src="/logo.svg" alt="Site Logo" class="w-120">
  </div>
</template>
