<script setup lang="ts">
const entries = await queryContent('/posts')
  .only(['title', 'date', 'description', '_path'])
  .find()
  .then((result) => {
    return (
      result as Array<{
        title?: string
        date: string
        description: string
        _path: string
      }>
    )
      .map(e => ({
        ...e,
        path: e._path,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })
</script>

<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div class="space-y-8">
        <article
          v-for="{ title, date, description, path } in entries"
          :key="path"
          class="light:bg-gray-800/80 animate-fadeInMoveUp my-4 flex flex-col items-start justify-between rounded-lg bg-gray-900 px-6 py-8 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg sm:px-8 sm:py-10 md:px-12 md:py-14"
        >
          <div class="mb-2 sm:mb-4">
            <span
              class="mr-2 rounded-full bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white"
            >
              <NuxtTime
                :datetime="date"
                day="numeric"
                month="long"
                year="numeric"
              />
            </span>
          </div>
          <h3
            class="mb-3 text-3xl font-bold leading-tight text-gray-100 sm:mb-4 sm:text-4xl md:text-5xl"
          >
            <a
              :href="path"
              class="transition-colors duration-200 hover:text-gray-300"
            >
              {{ title }}
            </a>
          </h3>
          <p
            class="mb-6 text-base leading-relaxed text-white sm:mb-10 sm:text-lg"
          >
            {{ description }}
          </p>
          <a
            :href="path"
            class="rounded-xl bg-blue-600 px-3 py-2 text-white hover:bg-blue-800 sm:px-4 sm:py-3"
            :aria-label="`Read more about ${title}`"
            :title="`Read more about ${title}`"
          >
            View Post
          </a>
        </article>
      </div>
    </div>
  </div>
</template>
