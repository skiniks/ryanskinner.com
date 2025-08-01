import type { MarkdownRoot } from '@nuxt/content'

export function calculateReadingTime(text: MarkdownRoot): number {
  const wordsPerMinute = 225
  let content = typeof text === 'string' ? text : JSON.stringify(text)

  const codeBlockRegex = /(```[\s\S]*?```|`[^`]*`)/g

  content = content.replace(codeBlockRegex, '')

  const numberOfWords = content.split(/\s+/).length
  const minutes = numberOfWords / wordsPerMinute

  return Math.ceil(minutes)
}
