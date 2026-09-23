import type { Feed } from 'rari'
import { getPosts } from '@/lib/content/post'
import { absoluteUrl, siteName, siteTagline } from '@/lib/site'
import { currentYear, parseDate } from '@/lib/utils/date'

export default function feed(): Feed {
  const posts = getPosts()

  return {
    title: siteName,
    description: siteTagline,
    link: absoluteUrl('/'),
    language: 'en',
    copyright: `© ${currentYear()} ${siteName}. All rights reserved.`,
    lastBuildDate: new Date(),
    items: posts
      .filter(post => post.externalUrl === undefined || post.externalUrl === '')
      .map(post => ({
        title: post.title,
        url: absoluteUrl(`/posts/${post.slug}`),
        description: post.description,
        pubDate: parseDate(post.date),
        categories: post.tags,
      })),
  }
}
