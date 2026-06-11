import type { Feed } from 'rari'
import { getPosts } from '@/lib/posts'

const baseUrl = 'https://ryanskinner.com'

export default function feed(): Feed {
  const posts = getPosts()

  return {
    title: 'Ryan Skinner',
    description: 'Writing about software engineering, web performance, and building things.',
    link: baseUrl,
    language: 'en',
    copyright: `© ${new Date().getFullYear()} Ryan Skinner. All rights reserved.`,
    lastBuildDate: new Date(),
    items: posts
      .filter(post => !post.externalUrl)
      .map(post => ({
        title: post.title,
        url: `${baseUrl}/posts/${post.slug}`,
        description: post.description,
        pubDate: new Date(post.date),
        categories: post.tags,
      })),
  }
}
