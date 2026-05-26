import type { PageProps } from 'rari'
import { generateOGImage } from '@/lib/og-image'
import { getPostBySlug } from '@/lib/posts'

export default async function Image({ params }: PageProps) {
  const slug = params?.slug
  const post = typeof slug === 'string' ? await getPostBySlug(slug) : null

  return generateOGImage({
    title: post?.title ?? 'Ryan Skinner',
    tags: post?.tags ?? [],
  })
}
