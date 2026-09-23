import type { PageProps } from 'rari'
import { readdirSync, readFileSync } from 'node:fs'
import MdxRenderer from '@/components/content/MdxRenderer'
import { createMetadata, getDefaultMetadata } from '@/lib/content/metadata'
import { contentDir, contentFilePath } from '@/lib/content/paths'
import { getPostBySlug } from '@/lib/content/post'
import { badgeStyle } from '@/lib/site/style'
import { formatDate } from '@/lib/utils/date'
import { isValidSlug } from '@/lib/utils/validation'

const DEFAULT_METADATA = getDefaultMetadata('Post')

export default function PostPage({ params }: PageProps) {
  const slug = params.slug
  if (!isValidSlug(slug))
    return <div>Invalid post path.</div>

  const post = getPostBySlug(slug)
  if (post === null)
    return <div>Post not found.</div>

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-4 px-4 sm:px-6 py-12 sm:py-16">
      <header>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <time
            dateTime={post.date}
            className={badgeStyle.date}
          >
            {formatDate(post.date)}
          </time>
          <span className={badgeStyle.readingTime}>
            {post.readingTime}
            {' '}
            min read
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          {post.title}
        </h1>
        {post.tags !== undefined && post.tags.length > 0 && (
          <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
            {post.tags.map(tag => (
              <li
                key={tag}
                className={badgeStyle.tag}
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
  const slug = params.slug

  if (!isValidSlug(slug))
    return DEFAULT_METADATA

  try {
    const post = getPostBySlug(slug)

    if (post === null)
      return DEFAULT_METADATA

    const metadata = createMetadata(
      post.title,
      post.description === '' ? DEFAULT_METADATA.description ?? '' : post.description,
      { path: `/posts/${slug}`, type: 'article' },
    )

    return metadata
  }
  catch {
    return DEFAULT_METADATA
  }
}

export function generateStaticParams() {
  try {
    const entries = readdirSync(contentDir)
    return entries
      .filter((entry) => {
        if (!entry.endsWith('.mdx'))
          return false
        const content = readFileSync(contentFilePath(entry), 'utf8')
        return !content.includes('export const externalUrl')
      })
      .map(entry => ({ slug: entry.replace(/\.mdx$/, '') }))
  }
  catch {
    return []
  }
}
