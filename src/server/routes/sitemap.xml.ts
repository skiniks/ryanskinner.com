import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

const staticPages = ['/', '/posts/']

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://ryanskinner.com',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'weekly',
    })
  }

  staticPages.forEach((page) => {
    sitemap.write({
      url: page,
      changefreq: 'monthly',
    })
  })

  sitemap.end()
  return streamToPromise(sitemap)
})
