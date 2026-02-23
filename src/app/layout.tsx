import type { LayoutProps } from 'rari'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Ryan Skinner',
  description:
    'Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web.',
}
