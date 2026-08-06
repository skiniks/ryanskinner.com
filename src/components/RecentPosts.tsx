import { getPosts } from '@/lib/posts'
import Button from './Button'
import PostCard from './PostCard'

export default function RecentPosts() {
  const recentPosts = getPosts(3)

  if (recentPosts.length === 0)
    return null

  const [featured, ...rest] = recentPosts

  return (
    <div className="py-12 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:px-8">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none flex flex-col justify-center">
          <PostCard
            slug={featured.slug}
            title={featured.title}
            description={featured.description}
            date={featured.date}
            readingTime={featured.readingTime}
            variant="featured"
            highlighted
            externalUrl={featured.externalUrl}
          />
        </div>

        {rest.length > 0 && (
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-col gap-6 sm:gap-8">
              {rest.slice(0, 2).map(post => (
                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readingTime={post.readingTime}
                  externalUrl={post.externalUrl}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 sm:mt-12 flex justify-center px-4">
        <Button href="/posts" size="lg">View All Posts</Button>
      </div>
    </div>
  )
}
