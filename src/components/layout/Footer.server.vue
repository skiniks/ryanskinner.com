<script setup lang="ts">
function useSocialLinks() {
  return [
    {
      name: 'GitHub',
      url: 'https://github.com/skiniks',
      iconClass: 'i-simple-icons-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ryankskinner/',
      iconClass: 'i-simple-icons-linkedin',
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.ryanskinner.com',
      iconClass: 'i-simple-icons-bluesky',
    },
  ]
}

const socialLinks = useSocialLinks()
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer>
    <div
      class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          class="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-105 sm:h-8 sm:w-8"
          :class="link.iconClass"
          target="_blank"
          :aria-label="`Link to ${link.name}`"
        />
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="light:text-black text-center text-xs leading-5 text-gray-300">
          &copy; {{ currentYear }} Ryan Skinner. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
