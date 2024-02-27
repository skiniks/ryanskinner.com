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
    return sortedEntries.length > 0 ? sortedEntries.slice(0, 3) : []
  })
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
      <article v-if="entries.length > 0" class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <span class="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-full">
          <NuxtTime :datetime="entries[0].date" day="numeric" month="long" year="numeric" />
        </span>
        <h2 class="mt-4 text-3xl font-bold tracking-tight light:text-gray-900 sm:text-4xl">
          {{ entries[0].title }}
        </h2>
        <p class="mt-4 text-lg leading-8 light:text-gray-600">
          {{ entries[0].description }}
        </p>
        <div class="mt-4">
          <a :href="entries[0].path" class="text-sm font-semibold leading-6 light:text-blue-600">Continue reading &rarr;</a>
        </div>
      </article>
      <div
        v-if="entries.length > 1"
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 dark:border-gray-200 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
      >
        <div class="-my-12 divide-y divide-gray-900/10 dark:divide-gray-200">
          <article v-for="(entry) in entries.slice(1, 3)" :key="entry.path" class="py-12">
            <div class="group relative max-w-xl">
              <span class="bg-blue-600 text-white text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-full">
                <NuxtTime :datetime="entry.date" day="numeric" month="long" year="numeric" />
              </span>
              <h2 class="mt-4 text-xl font-semibold light:text-gray-900 group-hover:text-gray-600">
                <a :href="entry.path">
                  {{ entry.title }}
                </a>
              </h2>
              <p class="mt-4 text-sm leading-6 light:text-gray-600">
                {{ entry.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
