import type { Sitemap } from 'rari'
import { getPosts } from '@/lib/posts'

const baseUrl = 'https://ryanskinner.com'

export default async function sitemap(): Promise<Sitemap> {
  const posts = await getPosts()

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
    ...posts.map(post => ({
      url: `${baseUrl}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
