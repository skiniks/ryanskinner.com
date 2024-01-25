<script setup lang="ts">
definePageMeta({
  layout: 'article',
})

const route = useRoute()

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)

const { data: contentData } = await useAsyncData('content', () =>
  queryContent()
    .where({ _path: path.value })
    .only(['title', 'date', 'tags'])
    .findOne())

defineOgImageComponent('Og', {
  title: 'Is this thing on?'
})
</script>

<template>
  <header class="mt-8 px-4 lg:px-0">
    <NuxtTime :datetime="contentData?.date" day="numeric" month="long" year="numeric" />
    <h1>{{ contentData?.title }}</h1>
    <ul class="list-none flex flex-wrap gap-2 p-0">
      <li
        v-for="tag in contentData?.tags" :key="tag"
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
