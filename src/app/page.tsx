import type { Metadata } from 'rari'
import Hero from '@/components/marketing/Hero'
import RecentPosts from '@/components/marketing/RecentPosts'
import UpcomingTalks from '@/components/marketing/UpcomingTalks'
import { absoluteUrl, siteDescription, siteHomeTitle, siteName } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <UpcomingTalks />
    </>
  )
}

export const metadata: Metadata = {
  title: siteHomeTitle,
  description: siteDescription,
  openGraph: {
    title: siteHomeTitle,
    description: siteDescription,
    siteName,
    locale: 'en_US',
    type: 'website',
    url: absoluteUrl('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteHomeTitle,
    description: siteDescription,
  },
}
