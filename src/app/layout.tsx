import type { LayoutProps, Metadata } from 'rari'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Ryan Skinner',
  description:
    'Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web.',
  alternates: {
    types: {
      'application/rss+xml': 'https://ryanskinner.com/feed.xml',
    },
  },
}
