<script setup lang="ts">
const menuItems = ref([
  { link: '/about', label: 'About' },
  { link: '/posts', label: 'Posts' },
  { link: '/contact', label: 'Contact' },
]);
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content flex flex-col">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 navbar pt-6">
        <div class="flex-none lg:hidden">
          <label for="my-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" alt="logo" class="w-40" />
          </NuxtLink>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <li v-for="item in menuItems" :key="item.label">
              <NuxtLink :to="item.link">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <li v-for="item in menuItems" :key="item.label">
          <NuxtLink :to="item.link">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
