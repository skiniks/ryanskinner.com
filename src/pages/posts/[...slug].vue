<script setup lang="ts">
definePageMeta({
  layout: 'article',
})

defineOgImageScreenshot()

const route = useRoute()
const path = computed(() => route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''))

const { data: pageData, error } = await useAsyncData('pageData', () => {
  const contentQuery = queryContent(path.value)
    .only(['title', 'date', 'tags', 'description'])

  return contentQuery.findOne()
})

if (error.value || !pageData.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
  })
}

route.meta.title = pageData.value.title
route.meta.description = pageData.value.description
</script>

<template>
  <header class="mt-8 px-4 lg:px-0">
    <div class="mb-2">
      <span class="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
        <NuxtTime :datetime="pageData?.date" day="numeric" month="long" year="numeric" />
      </span>
    </div>
    <h1 class="text-gray-100 light:text-black">
      {{ pageData?.title }}
    </h1>
    <ul class="list-none flex flex-wrap gap-2 p-0">
      <li
        v-for="tag in pageData?.tags" :key="tag"
        class="bg-blue-200 text-blue-800 light:bg-blue-800 light:text-blue-200 text-sm font-semibold py-1 px-3 rounded-full"
      >
        {{ tag }}
      </li>
    </ul>
  </header>

  <main class="px-4 lg:px-0">
    <StaticMarkdownRender :path="path" />
  </main>
</template>
