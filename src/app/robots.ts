import type { Robots } from 'rari'
import { sitemapUrl } from '@/lib/site'

export default function robots(): Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapUrl,
  }
}
