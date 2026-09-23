export const siteUrl = 'https://ryanskinner.com'

export const siteName = 'Ryan Skinner'

export const siteHomeTitle = `${siteName} — Software Engineer & Creator of rari`

export const siteDescription
  = 'Software engineer specializing in high-performance web applications. Expert in React and modern server-side technologies, focused on creating exceptional developer experiences and pushing the boundaries of the modern web.'

export const siteTagline
  = 'Writing about software engineering, web performance, and building things.'

export const githubUser = 'skiniks'
export const githubRepo = 'skiniks/ryanskinner.com'

export const githubUrl = `https://github.com/${githubUser}`
export const githubRepoUrl = `https://github.com/${githubRepo}`
export const blueskyUrl = `https://bsky.app/profile/${siteUrl.replace('https://', '')}`
export const rariUrl = 'https://rari.build'

export function absoluteUrl(path: string = '/'): string {
  if (path === '' || path === '/')
    return siteUrl

  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized}`
}

export const feedUrl = absoluteUrl('/feed.xml')
export const sitemapUrl = absoluteUrl('/sitemap.xml')

export const contentLicense = 'CC BY-SA 4.0'
export const contentLicenseUrl = 'https://creativecommons.org/licenses/by-sa/4.0/'

export const gaId = 'G-2PTW34K8LT'
