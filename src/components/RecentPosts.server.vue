<script setup lang="ts">
const recentPosts = await queryContent('/posts')
  .only(['title', 'date', 'description', '_path'])
  .limit(3)
  .find()
  .then(result => {
    return (result as Array<{ title?: string; date: string; description: string; _path: string }>)
      .map(e => ({
        ...e,
        path: e._path,
      }));
  });
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
      <article v-if="recentPosts.length > 0" class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
        <time :datetime="recentPosts[0].date" class="block text-sm leading-6">{{ new
          Date(recentPosts[0].date).toLocaleDateString() }}</time>
        <h2 id="featured-post" class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{{
          recentPosts[0].title }}</h2>
        <p class="mt-4 text-lg leading-7">{{ recentPosts[0].description }}</p>
        <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
          <div class="flex">
            <NuxtLink :to="recentPosts[0].path" class="text-sm font-semibold leading-6 text-indigo-600"
              aria-describedby="featured-post">Continue reading <span aria-hidden="true">&rarr;</span></NuxtLink>
          </div>
        </div>
      </article>

      <div
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
        <div class="-my-12 divide-y divide-gray-400">
          <article v-for="(post, _index) in recentPosts.slice(1)" :key="post.path" class="py-12">
            <div class="group relative max-w-xl">
              <time :datetime="post.date" class="block text-sm leading-6">{{ new
                Date(post.date).toLocaleDateString() }}</time>
              <h2 class="mt-2 text-lg font-semibold">
                <NuxtLink :to="post.path">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </NuxtLink>
              </h2>

              <div class="mt-3">
                <p>{{ post.description }}</p>
              </div>
            </div>
            <div class="mt-4 flex">
              <NuxtLink :to="post.path" class="relative flex gap-x-2.5 text-sm font-semibold leading-6">Read
                More</NuxtLink>
            </div>
          </article>
        </div>
    </div>
  </div>
</div></template>
