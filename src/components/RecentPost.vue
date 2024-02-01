<script setup lang="ts">
const entries = await queryContent('/posts')
  .only(['title', 'date', 'description', '_path'])
  .find()
  .then((result) => {
    const sortedEntries = (result as Array<{ title?: string, date: string, description: string, _path: string }>)
      .map(e => ({
        ...e,
        path: e._path,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedEntries.length > 0 ? [sortedEntries[0]] : [];
  })
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div v-if="entries.length > 0" :key="entries[0].path" class="max-w-3xl px-12 py-14 bg-gray-900 light:bg-gray-800/60 rounded-lg">
      <div class="mb-4 text-white text-sm">
        <span class="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
          <NuxtTime :datetime="entries[0].date" day="numeric" month="long" year="numeric" />
        </span>
      </div>
      <h1 class="mb-4 text-5xl font-bold text-gray-100 leading-tight">
        <a :href="entries[0].path" class="hover:text-gray-300 transition-colors duration-200">
          {{ entries[0].title }}
        </a>
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed mb-10">
        {{ entries[0].description }}
      </p>
      <a :href="entries[0].path" class="bg-blue-600 hover:bg-blue-800 px-4 py-4 rounded-xl" :aria-label="'Read more about ' + entries[0].title" :title="'Read more about ' + entries[0].title">
      View Post
      </a>
    </div>
    <div v-else class="text-center">
      <p>No recent posts available.</p>
    </div>
  </div>
</template>
