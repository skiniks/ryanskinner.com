import type { LayoutProps, Metadata } from 'rari'
import Analytics from '@/components/ui/Analytics'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { absoluteUrl, feedUrl, siteDescription, siteName } from '@/lib/site'
import './globals.css'

// oxlint-disable-next-line typescript/prefer-readonly-parameter-types
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  alternates: {
    types: {
      'application/rss+xml': feedUrl,
    },
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName,
    locale: 'en_US',
    type: 'website',
    url: absoluteUrl('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
}
