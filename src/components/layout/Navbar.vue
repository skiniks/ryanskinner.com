<template>
  <div class="relative z-20 bg-gray-800">
    <div class="mx-auto max-w-6xl py-4">
      <nav class="flex items-center justify-between p-4 text-white">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width="160" height="32">
        </NuxtLink>

        <div class="flex items-center gap-4">
          <NuxtLink to="/posts">
            Posts
          </NuxtLink>
          <ToggleColorMode class="flex" />
        </div>
      </nav>
    </div>
  </div>
</template>
