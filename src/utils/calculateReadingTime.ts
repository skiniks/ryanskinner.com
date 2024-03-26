import type { MarkdownRoot } from '@nuxt/content/types'

export function calculateReadingTime(text: MarkdownRoot): number {
  const wordsPerMinute = 225
  const content = typeof text === 'string' ? text : JSON.stringify(text)
  const numberOfWords = content.split(/\s+/).length
  const minutes = numberOfWords / wordsPerMinute

  return Math.ceil(minutes)
}
