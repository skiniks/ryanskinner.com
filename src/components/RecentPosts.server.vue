<script setup lang="ts">
const { data: entries } = await useAsyncData('recent-posts', async () => {
  try {
    const posts = await queryCollection('posts').all()

    return posts
      .map((post) => {
        return {
          title: post.title || 'Untitled',
          date: post.meta?.date || new Date().toISOString(),
          description: post.description || '',
          path: post.path || '/',
          readingTime: post.body ? calculateReadingTime(post.body) : 5,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
  }
  catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
})
</script>

<template>
  <div class="py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <article
        v-if="entries && entries.length > 0"
        class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
      >
        <span
          class="mr-2 rounded-full bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white"
        >
          <NuxtTime
            :datetime="entries[0].date"
            day="numeric"
            month="long"
            year="numeric"
          />
        </span>
        <span
          class="light:bg-gray-300 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800"
        >
          {{ entries[0].readingTime }} min read
        </span>
        <h3
          class="light:text-gray-900 mt-4 text-3xl font-bold tracking-tight transition-colors duration-200 hover:text-gray-600 sm:text-4xl"
        >
          <NuxtLink :to="entries[0].path">
            {{ entries[0].title }}
          </NuxtLink>
        </h3>
        <p class="light:text-gray-600 mt-4 text-lg leading-8">
          {{ entries[0].description }}
        </p>
        <div class="mt-4">
          <NuxtLink
            :to="entries[0].path"
            class="light:text-blue-600 text-sm font-semibold leading-6"
          >
            Continue reading &rarr;
          </NuxtLink>
        </div>
      </article>
      <div
        v-if="entries && entries.length > 1"
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0 dark:border-gray-200"
      >
        <div class="-my-12 divide-y divide-gray-900/10 dark:divide-gray-200">
          <article
            v-for="entry in (entries || []).slice(1, 3)"
            :key="entry.path"
            class="py-12"
          >
            <div class="group relative max-w-xl">
              <span
                class="mr-2 rounded-full bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white"
              >
                <NuxtTime
                  :datetime="entry.date"
                  day="numeric"
                  month="long"
                  year="numeric"
                />
              </span>
              <span
                class="light:bg-gray-300 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800"
              >
                {{ entry.readingTime }} min read
              </span>
              <h3
                class="light:text-gray-900 mt-4 text-xl font-semibold group-hover:text-gray-600"
              >
                <NuxtLink :to="entry.path">
                  {{ entry.title }}
                </NuxtLink>
              </h3>
              <p class="light:text-gray-600 mt-4 text-sm leading-6">
                {{ entry.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
