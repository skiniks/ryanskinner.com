<script setup lang="ts">
const props = defineProps({
  path: String,
  title: String,
  description: String,
  bgColor: String,
  tags: Array as PropType<string[]>,
})

const isClass = computed(() => props.bgColor?.startsWith('bg-'))
</script>

<template>
  <div
    class="relative flex h-full w-full flex-col justify-center text-white"
    :class="isClass ? [bgColor || 'bg-blue-500'] : []"
    :style="{ backgroundColor: !isClass ? `#${bgColor}` : undefined }"
    style="padding: 60px"
  >
    <div class="mb-6 mt-4 flex">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-blue-700 px-3 py-1 text-lg font-semibold"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <h1 :style="{ fontSize: '60px', margin: '0' }">
      {{ title }}
    </h1>
  </div>
</template>
