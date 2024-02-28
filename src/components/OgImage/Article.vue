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
    class="w-full h-full flex flex-col justify-center text-white relative"
    :class="isClass ? [bgColor || 'bg-blue-500'] : []" :style="{ backgroundColor: !isClass ? `#${bgColor}` : undefined }"
    style="padding: 60px;"
  >
    <div class="flex mt-4 mb-6">
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="bg-blue-700 text-lg font-semibold px-3 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>
    <h1 :style="{ fontSize: '60px', margin: '0' }">
      {{ title }}
    </h1>
  </div>
</template>
