import type { PageProps } from 'rari'
import { generateOGImage } from '@/lib/site/og-image'
import { getPostBySlug } from '@/lib/content/post'

export default function Image({ params }: PageProps) {
  const slug = params.slug
  const post = typeof slug === 'string' ? getPostBySlug(slug) : null

  return generateOGImage({
    title: post?.title ?? 'Ryan Skinner',
    tags: post?.tags ?? [],
  })
}
