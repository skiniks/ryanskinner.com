import Button from '@/components/Button'
import ChevronLeft from '@/components/icons/ChevronLeft'
import ChevronRight from '@/components/icons/ChevronRight'
import PostCard from '@/components/PostCard'
import { getPaginatedPosts } from '@/lib/posts'

interface PostsPageProps {
  searchParams: { page?: string }
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const currentPage = Number(searchParams.page) || 1
  const { posts, totalPages } = await getPaginatedPosts(currentPage, 9)

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">All Posts</h1>
          <p className="mt-2 text-lg text-gray-400">Thoughts on software engineering and performance</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              readingTime={post.readingTime}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Button href={`/posts?page=${currentPage - 1}`} variant="secondary" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            )}

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <a
                  key={page}
                  href={`/posts?page=${page}`}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${page === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-900 border border-gray-700 text-white hover:border-blue-500/50 hover:scale-[1.02] hover:brightness-[1.3]'
                  }`}
                >
                  {page}
                </a>
              ))}
            </div>

            {currentPage < totalPages && (
              <Button href={`/posts?page=${currentPage + 1}`} variant="secondary" size="sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Posts / Ryan Skinner',
  description: 'Blog posts about software engineering, React, performance, and modern web technologies.',
}
