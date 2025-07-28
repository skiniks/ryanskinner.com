import path from 'node:path'
import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: {
        cwd: path.resolve('src/content'),
        include: 'posts/**/*.md',
      },
    }),
  },
})
