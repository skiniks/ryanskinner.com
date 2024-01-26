<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'title',
  description: 'description',
})
</script>

<template>
  <div class="h-full w-full flex items-start justify-start border-solid bg-gray-800">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <h1 class="text-[80px] p-20 text-white text-left">
          {{ title }}
        </h1>
        <p class="text-2xl pb-10 px-20 text-white font-black mb-0">
          ryanskinner.com
        </p>
      </div>
    </div>
  </div>
</template>
