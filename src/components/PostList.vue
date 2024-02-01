<script setup lang="ts">
const entries = await queryContent('/posts')
  .only(['title', 'date', 'description', '_path'])
  .find()
  .then((result) => {
    return (result as Array<{ title?: string, date: string, description: string, _path: string }>)
      .map(e => ({
        ...e,
        path: e._path,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<template>
  <div class="mx-auto max-w-7xl px-2 lg:px-0">
    <div class="mx-auto max-w-2xl">
      <div class="space-y-16">
        <article
          v-for="{ title, date, description, path } in entries" :key="path"
          class="flex max-w-3xl flex-col items-start justify-between bg-gray-900 light:bg-gray-800/80 rounded-lg px-12 py-14 my-4 shadow-md transition-all ease-in-out duration-300 hover:shadow-lg animate-fadeInMoveUp"
        >
          <div class="mb-4">
            <span class="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
              <NuxtTime :datetime="date" day="numeric" month="long" year="numeric" />
            </span>
          </div>
          <h3 class="text-5xl font-bold text-gray-100 leading-tight mb-4">
            <a :href="path" class="hover:text-gray-300 transition-colors duration-200">
              {{ title }}
            </a>
          </h3>
          <p class="text-white text-lg leading-relaxed mb-10">
            {{ description }}
          </p>
          <a :href="path" class="text-white bg-blue-600 hover:bg-blue-800 px-4 py-4 rounded-xl" :aria-label="'Read more about ' + title" :title="'Read more about ' + title">
            View Post
          </a>
        </article>
      </div>
    </div>
  </div>
</template>
