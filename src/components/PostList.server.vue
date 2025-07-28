<script setup lang="ts">
const { data: entries } = await useAsyncData('post-list', async () => {
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
  }
  catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
})
</script>

<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div class="space-y-8">
        <article
          v-for="{ title, date, description, path, readingTime } in (entries || [])"
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
            <span
              class="light:bg-gray-300 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-800"
            >
              {{ readingTime }} min read
            </span>
          </div>
          <h3
            class="mb-3 text-3xl font-bold leading-tight text-gray-100 sm:mb-4 sm:text-4xl"
          >
            <NuxtLink
              :to="path"
              class="transition-colors duration-200 hover:text-gray-300"
            >
              {{ title }}
            </NuxtLink>
          </h3>
          <p
            class="mb-6 text-base leading-relaxed text-white sm:mb-10 sm:text-lg"
          >
            {{ description }}
          </p>
          <NuxtLink
            :to="path"
            class="rounded-xl bg-blue-600 px-3 py-2 text-white hover:bg-blue-800 sm:px-4 sm:py-3"
            :aria-label="`Read more about ${title}`"
            :title="`Read more about ${title}`"
          >
            View Post
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>
