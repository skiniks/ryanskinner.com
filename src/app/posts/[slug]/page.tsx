import type { PageProps } from 'rari'
import { readdir, readFile } from 'node:fs/promises'
import ExternalPostRedirect from '@/components/content/ExternalPostRedirect'
import MdxRenderer from '@/components/content/MdxRenderer'
import NotFoundContent from '@/components/ui/NotFoundContent'
import { createMetadata, getDefaultMetadata } from '@/lib/content/metadata'
import { contentDir, contentFilePath } from '@/lib/content/paths'
import { getPostBySlug } from '@/lib/content/post'
import { badgeStyle } from '@/lib/site/style'
import { formatDate } from '@/lib/utils/date'
import { isValidSlug } from '@/lib/utils/validation'

const DEFAULT_METADATA = getDefaultMetadata('Post')

export default async function PostPage({ params }: PageProps) {
  const slug = params.slug
  if (!isValidSlug(slug))
    return <NotFoundContent />

  const post = await getPostBySlug(slug)
  if (post === null)
    return <NotFoundContent />

  if (post.externalUrl != null && post.externalUrl !== '') {
    return (
      <ExternalPostRedirect
        url={post.externalUrl}
        title={post.title}
      />
    )
  }

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
      <MdxRenderer filePath={`${slug}.mdx`} className="prose-lg" />
    </article>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const slug = params.slug

  if (!isValidSlug(slug))
    return DEFAULT_METADATA

  try {
    const post = await getPostBySlug(slug)

    if (post === null || (post.externalUrl != null && post.externalUrl !== ''))
      return DEFAULT_METADATA

    return createMetadata(
      post.title,
      post.description === '' ? DEFAULT_METADATA.description ?? '' : post.description,
      { path: `/posts/${slug}`, type: 'article' },
    )
  }
  catch {
    return DEFAULT_METADATA
  }
}

export async function generateStaticParams() {
  try {
    const entries = await readdir(contentDir)
    const slugs = await Promise.all(
      entries
        .filter(entry => entry.endsWith('.mdx'))
        .map(async (entry) => {
          const content = await readFile(contentFilePath(entry), 'utf8')
          if (content.includes('export const externalUrl'))
            return null
          return { slug: entry.replace(/\.mdx$/, '') }
        }),
    )
    return slugs.filter((entry): entry is { slug: string } => entry !== null)
  }
  catch {
    return []
  }
}
