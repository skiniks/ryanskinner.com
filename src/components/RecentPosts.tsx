import { getPosts } from '@/lib/posts'
import Button from './Button'
import PostCard from './PostCard'

export default async function RecentPosts() {
  const recentPosts = await getPosts(3)

  if (recentPosts.length === 0)
    return null

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        {recentPosts[0] && (
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none flex flex-col justify-center">
            <PostCard
              slug={recentPosts[0].slug}
              title={recentPosts[0].title}
              description={recentPosts[0].description}
              date={recentPosts[0].date}
              readingTime={recentPosts[0].readingTime}
              variant="featured"
            />
          </div>
        )}

        {recentPosts.length > 1 && (
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col gap-8">
              {recentPosts.slice(1, 3).map(post => (
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
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/posts" size="lg">View All Posts</Button>
      </div>
    </div>
  )
}
