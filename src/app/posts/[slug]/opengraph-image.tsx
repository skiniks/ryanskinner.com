import type { PageProps } from 'rari'
import { generateOGImage } from '@/lib/site/og-image'
import { getPostBySlug } from '@/lib/content/post'

export default async function Image({ params }: PageProps) {
  const slug = params.slug
  const post = typeof slug === 'string' ? await getPostBySlug(slug) : null
  const isExternal = post?.externalUrl != null && post.externalUrl !== ''

  return generateOGImage({
    title: post == null || isExternal ? 'Ryan Skinner' : post.title,
    tags: post == null || isExternal ? [] : post.tags ?? [],
  })
}
