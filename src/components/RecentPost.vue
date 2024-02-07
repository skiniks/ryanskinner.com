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
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return sortedEntries.length > 0 ? [sortedEntries[0]] : []
  })
</script>

<template>
  <div class="p-8 md:p-12">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div class="mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div class="space-y-8">
          <div
            v-if="entries.length > 0" :key="entries[0].path"
            class="flex flex-col items-start justify-between bg-gray-900 light:bg-gray-800/80 rounded-lg px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 my-4 shadow-md transition-all ease-in-out duration-300 hover:shadow-lg animate-fadeInMoveUp"
          >
            <div class="mb-4">
              <span class="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                <NuxtTime :datetime="entries[0].date" day="numeric" month="long" year="numeric" />
              </span>
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 leading-tight mb-3 sm:mb-4">
              <a :href="entries[0].path" class="hover:text-gray-300 transition-colors duration-200">
                {{ entries[0].title }}
              </a>
            </h1>
            <p class="text-white text-lg leading-relaxed mb-10">
              {{ entries[0].description }}
            </p>
            <a
              :href="entries[0].path" class="text-white bg-blue-600 hover:bg-blue-800 px-4 py-4 rounded-xl"
              :aria-label="`Read more about ${entries[0].title}`" :title="`Read more about ${entries[0].title}`"
            >
              View Post
            </a>
          </div>
          <div v-else class="text-center">
            <p>No recent posts available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
