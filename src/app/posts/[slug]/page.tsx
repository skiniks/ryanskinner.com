import type { PageProps } from 'rari'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import MdxRenderer from '@/components/MdxRenderer'
import { formatDate } from '@/lib/dates'
import { createMetadata, getDefaultMetadata } from '@/lib/metadata'
import { getPostBySlug } from '@/lib/posts'
import { badgeStyles } from '@/lib/styles'
import { isValidSlug } from '@/lib/validation'

const DEFAULT_METADATA = getDefaultMetadata('Post')

export default function PostPage({ params }: PageProps) {
  const slug = params?.slug
  if (!isValidSlug(slug))
    return <div>Invalid post path.</div>

  const post = getPostBySlug(slug)
  if (!post)
    return <div>Post not found.</div>

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-4 px-4 sm:px-6 py-12 sm:py-16">
      <header>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <time
            dateTime={post.date}
            className={badgeStyles.date}
          >
            {formatDate(post.date)}
          </time>
          <span className={badgeStyles.readingTime}>
            {post.readingTime}
            {' '}
            min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 && (
          <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
            {post.tags.map(tag => (
              <li
                key={tag}
                className={badgeStyles.tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className="prose prose-invert max-w-none prose-lg">
        <MdxRenderer filePath={`${slug}.mdx`} />
      </div>
    </article>
  )
}

export function generateMetadata({ params }: PageProps) {
  const slug = params?.slug

  if (!isValidSlug(slug))
    return DEFAULT_METADATA

  try {
    const post = getPostBySlug(slug)

    if (!post)
      return DEFAULT_METADATA

    const metadata = createMetadata(
      post.title,
      post.description || DEFAULT_METADATA.description,
    )

    return metadata
  }
  catch {
    return DEFAULT_METADATA
  }
}

export function generateStaticParams() {
  const contentDir = join(process.cwd(), 'public', 'content')

  try {
    const entries = readdirSync(contentDir)
    return entries
      .filter(entry => entry.endsWith('.mdx'))
      .map(entry => ({ slug: entry.replace(/\.mdx$/, '') }))
  }
  catch {
    return []
  }
}
