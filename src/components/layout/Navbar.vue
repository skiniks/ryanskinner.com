<template>
  <div class="bg-gray-800 relative z-20">
    <div class="mx-auto max-w-6xl py-4">
      <nav class="flex justify-between items-center text-white p-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <NuxtImg src="/logo.svg" alt="Logo" width="160" height="32" />
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
