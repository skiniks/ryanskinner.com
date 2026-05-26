export const DEFAULT_SITE_NAME = 'Ryan Skinner'
export const DEFAULT_SITE_DESCRIPTION = 'Software engineer building high-performance web applications. Creator of rari, a React Server Components framework powered by Rust.'

export function createMetadata(
  title: string,
  description: string = DEFAULT_SITE_DESCRIPTION,
) {
  return {
    title: `${title} / ${DEFAULT_SITE_NAME}`,
    description,
  }
}

export function getDefaultMetadata(pageType: string = 'Page') {
  return {
    title: `${pageType} / ${DEFAULT_SITE_NAME}`,
    description: DEFAULT_SITE_DESCRIPTION,
  }
}
