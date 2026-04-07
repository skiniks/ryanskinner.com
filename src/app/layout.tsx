import type { LayoutProps } from 'rari'
import { Suspense } from 'react'
import Footer from '@/components/Footer'
import FooterSkeleton from '@/components/FooterSkeleton'
import Navbar from '@/components/Navbar'

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  )
}

export const metadata = {
  title: 'Ryan Skinner',
  description:
    'Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web.',
}
