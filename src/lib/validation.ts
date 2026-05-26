export function isValidSlug(slug: unknown): slug is string {
  return (
    typeof slug === 'string'
    && slug.length > 0
    && !slug.includes('..')
    && !slug.includes('/')
    && !slug.includes('\\')
  )
}

export function sanitizeSlug(slug: unknown): string | null {
  if (typeof slug !== 'string' || slug.length === 0)
    return null

  const sanitized = slug
    .replace(/\.\./g, '')
    .replace(/[/\\]/g, '')
    .trim()

  return sanitized.length > 0 ? sanitized : null
}
