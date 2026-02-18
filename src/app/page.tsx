import Hero from '@/components/Hero'
import RecentPosts from '@/components/RecentPosts'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentPosts />
    </>
  )
}

export const metadata = {
  title: 'Ryan Skinner',
  description:
    'Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web.',
}
