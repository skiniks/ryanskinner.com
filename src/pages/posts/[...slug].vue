<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, createError } from 'nuxt/app'

definePageMeta({
  layout: 'article',
})

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

defineOgImageComponent('NuxtSeo', {
  title: pageData.value.title,
})
</script>

<template>
  <header class="mt-8 px-4 lg:px-0">
    <NuxtTime :datetime="pageData?.date" day="numeric" month="long" year="numeric" />
    <h1>{{ pageData?.title }}</h1>
    <ul class="list-none flex flex-wrap gap-2 p-0">
      <li v-for="tag in pageData?.tags" :key="tag"
        class="bg-blue-200 text-blue-800 light:bg-blue-800 light:text-blue-200 text-sm font-semibold py-1 px-3 rounded-full">
        {{ tag }}
      </li>
    </ul>
  </header>

  <main class="px-4 lg:px-0">
    <StaticMarkdownRender :path="path" />
  </main>
</template>
