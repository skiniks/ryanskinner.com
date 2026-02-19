import type { PageProps } from 'rari'
import MdxRenderer from '@/components/MdxRenderer'
import { formatDate, getPostBySlug } from '@/lib/posts'

const DEFAULT_METADATA = {
  title: 'Post / Ryan Skinner',
  description: 'Blog post about software engineering, React, performance, and modern web technologies.',
}

export default async function PostPage({ params }: PageProps) {
  const slug = params?.slug
  if (typeof slug !== 'string' || slug.includes('..') || slug.includes('/'))
    return <div>Invalid post path.</div>

  const post = await getPostBySlug(slug)
  if (!post)
    return <div>Post not found.</div>

  return (
    <article className="mx-auto flex max-w-2xl flex-col gap-4 px-4 sm:px-6 py-12 sm:py-16">
      <header>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <time
            dateTime={post.date}
            className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20"
          >
            {formatDate(post.date)}
          </time>
          <span className="inline-flex items-center rounded-full bg-gray-700/50 px-3 py-1.5 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-gray-600">
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
                className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20"
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

export async function generateMetadata({ params }: PageProps) {
  const slug = params?.slug

  if (typeof slug !== 'string' || slug.includes('..') || slug.includes('/'))
    return DEFAULT_METADATA

  try {
    const post = await getPostBySlug(slug)

    if (!post)
      return DEFAULT_METADATA

    return {
      title: `${post.title} / Ryan Skinner`,
      description: post.description || DEFAULT_METADATA.description,
    }
  }
  catch {
    return DEFAULT_METADATA
  }
}
