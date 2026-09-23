import type { Sitemap } from 'rari'
import { getPosts } from '@/lib/content/post'
import { absoluteUrl } from '@/lib/site'
import { parseDate } from '@/lib/utils/date'

export default function sitemap(): Sitemap {
  const posts = getPosts()

  return [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absoluteUrl('/posts'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...posts
      .filter(post => post.externalUrl === undefined || post.externalUrl === '')
      .map(post => ({
        url: absoluteUrl(`/posts/${post.slug}`),
        lastModified: parseDate(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ]
}
