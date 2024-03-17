<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <button
    v-if="colorMode"
    aria-label="Change site theme"
    type="button"
    class="bg-accent border-accent hover:border-primary focus:border-primary active:border-primary relative ml-2 h-7 w-12 items-center justify-start rounded-full border-2 border-solid px-1 outline-none transition-opacity"
    @click="
      colorMode.value === 'dark'
        ? (colorMode.preference = 'light')
        : (colorMode.preference = 'dark')
    "
  >
    <span
      class="bg-primary inline-block h-4 w-4 rounded-full transition-transform"
      :style="
        colorMode.value === 'light' ? 'transform:translateX(1.25rem)' : ''
      "
    />
  </button>
</template>
