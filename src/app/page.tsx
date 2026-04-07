import Hero from '@/components/Hero'
import RecentPosts from '@/components/RecentPosts'
import UpcomingTalks from '@/components/UpcomingTalks'

export default async function HomePage() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <UpcomingTalks />
    </>
  )
}

export const metadata = {
  title: 'Ryan Skinner — Software Engineer & Creator of rari',
  description:
    'Software engineer building high-performance web applications. Creator of rari, a React Server Components framework powered by Rust.',
}
