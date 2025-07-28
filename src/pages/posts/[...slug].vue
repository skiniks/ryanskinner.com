<script setup lang="ts">
definePageMeta({
  layout: 'article',
})

const route = useRoute()
const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)

const { data: pageData, error } = await useAsyncData('pageData', () => {
  return queryCollection('posts').path(path.value).first()
})

if (error.value || !pageData.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
  })
}

const readingTime = computed(() => {
  if (pageData.value?.body)
    return calculateReadingTime(pageData.value.body)

  return 0
})

route.meta.title = pageData.value.title
route.meta.description = pageData.value.description
route.meta.tags = pageData.value.meta.tags

useRoute().meta.description = pageData.value.description

defineOgImageComponent('Article', {
  title: route.meta.title,
  bgColor: 'bg-gray-800',
  tags: route.meta.tags,
})

useSeoMeta({
  title: pageData.value.title,
  description: pageData.value.description,
})
</script>

<template>
  <header class="mt-8 px-4 lg:px-0">
    <div class="mb-2 flex flex-wrap items-baseline">
      <span
        class="mr-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
      >
        <NuxtTime
          :datetime="pageData?.meta?.date"
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
    <h1 class="light:text-black mb-2 text-gray-100">
      {{ pageData?.title }}
    </h1>
    <ul class="flex list-none flex-wrap gap-2 p-0">
      <li
        v-for="tag in pageData?.meta?.tags"
        :key="tag"
        class="light:bg-blue-800 light:text-blue-200 rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-800"
      >
        {{ tag }}
      </li>
    </ul>
  </header>

  <main class="px-4 lg:px-0">
    <StaticMarkdownRender :path="path" />
  </main>
</template>
