import type { Metadata } from 'rari'
import { absoluteUrl, siteDescription, siteName } from '@/lib/site'

interface CreateMetadataOptions {
  readonly path?: string
  readonly type?: 'website' | 'article'
}

export function createMetadata(
  title: string,
  description: string = siteDescription,
  options: CreateMetadataOptions = {},
): Metadata {
  const fullTitle = `${title} / ${siteName}`
  const url = options.path != null && options.path !== ''
    ? absoluteUrl(options.path)
    : undefined

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      locale: 'en_US',
      type: options.type ?? 'website',
      ...(url != null ? { url } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

export function getDefaultMetadata(pageType: string = 'Page'): Metadata {
  return createMetadata(pageType)
}
