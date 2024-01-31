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
          class="flex max-w-xl flex-col items-start justify-between bg-white rounded-lg p-6 my-4 shadow-md transition-all ease-in-out duration-300 hover:shadow-lg  animate-fadeInMoveUp"
        >
          <div class="flex items-center gap-x-4 text-xs  text-black">
            <NuxtTime :datetime="date" day="numeric" month="long" year="numeric" />
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-2xl font-semibold text-black">
              <a :href="path">
                <span class="absolute inset-0" />
                {{ title }}
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6  text-black">
              {{ description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
