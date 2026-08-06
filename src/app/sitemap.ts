import type { Sitemap } from 'rari'
import { getPosts } from '@/lib/posts'

const baseUrl = 'https://ryanskinner.com'

export default function sitemap(): Sitemap {
  const posts = getPosts()

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...posts
      .filter(post => post.externalUrl === undefined || post.externalUrl === '')
      .map(post => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
  ]
}
