import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parseDate, toDateOnly } from '@/lib/dates'

const EXPORT_REGEX = /^export const (\w+) = (.+)$/gm
const FRONTMATTER_CONTENT_REGEX = /^export const \w+ = .+$/gm
const MARKDOWN_EXTENSIONS = /\.(md|mdx)$/
const WHITESPACE_REGEX = /\s+/

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  content: string
  readingTime: number
  externalUrl?: string
}

interface FrontmatterData {
  readonly title?: string
  readonly description?: string
  readonly date?: string
  readonly tags?: readonly string[]
  readonly externalUrl?: string
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(WHITESPACE_REGEX).length
  return Math.ceil(words / wordsPerMinute)
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === 'string' && value !== '' ? value : undefined
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string')
    ? value
    : []
}

function parseFrontmatter(fileContents: string): { data: FrontmatterData, content: string } {
  const data: Record<string, unknown> = {}
  const matches = fileContents.matchAll(EXPORT_REGEX)

  for (const match of matches) {
    const key = match[1]
    const raw = match[2]

    let value: unknown = raw

    if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith('\'') && raw.endsWith('\''))) {
      value = raw.slice(1, -1)
    }
    else if (raw.startsWith('[') || raw.startsWith('{')) {
      try {
        value = JSON.parse(raw) as unknown
      }
      catch {
        console.warn(`Failed to parse JSON value for ${key}:`, raw)
      }
    }

    data[key] = value
  }

  const content = fileContents.replace(FRONTMATTER_CONTENT_REGEX, '').trim()

  return {
    data: {
      title: asOptionalString(data.title),
      description: asOptionalString(data.description),
      date: asOptionalString(data.date),
      tags: asStringArray(data.tags),
      externalUrl: asOptionalString(data.externalUrl),
    },
    content,
  }
}

function toPost(slug: string, data: FrontmatterData, content: string, readingTime: number): Post {
  return {
    slug,
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date === undefined ? toDateOnly(new Date().toISOString()) : toDateOnly(data.date),
    tags: data.tags === undefined ? [] : [...data.tags],
    content,
    readingTime,
    externalUrl: data.externalUrl,
  }
}

export function getPosts(limit?: number): Post[] {
  try {
    const postsDirectory = path.join(process.cwd(), 'public/content')

    let filenames: string[]
    try {
      filenames = fs.readdirSync(postsDirectory)
    }
    catch {
      return []
    }

    const posts = filenames
      .filter(filename => filename.endsWith('.md') || filename.endsWith('.mdx'))
      .map((filename) => {
        const slug = filename.replace(MARKDOWN_EXTENSIONS, '')
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = parseFrontmatter(fileContents)
        const readingTime = data.externalUrl === undefined
          ? calculateReadingTime(content)
          : 0

        return toPost(slug, data, content, readingTime)
      })
      .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())

    return limit === undefined ? posts : posts.slice(0, limit)
  }
  catch (error) {
    console.error('Error in getPosts:', error)
    return []
  }
}

export function getAllPosts(limit?: number): Post[] {
  return getPosts(limit)
}

export function getPaginatedPosts(page: number = 1, postsPerPage: number = 9): { posts: Post[], totalPages: number, currentPage: number } {
  try {
    const allPosts = getPosts()
    const totalPages = Math.ceil(allPosts.length / postsPerPage)
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const posts = allPosts.slice(startIndex, endIndex)

    return {
      posts,
      totalPages,
      currentPage: page,
    }
  }
  catch (error) {
    console.error('Error in getPaginatedPosts:', error)
    return {
      posts: [],
      totalPages: 0,
      currentPage: page,
    }
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const extensions = ['mdx', 'md']
    let fileContents: string | null = null

    for (const ext of extensions) {
      try {
        const filePath = path.join(process.cwd(), 'public/content', `${slug}.${ext}`)
        fileContents = fs.readFileSync(filePath, 'utf8')
        break
      }
      catch {
        continue
      }
    }

    if (fileContents === null)
      return null

    const { data, content } = parseFrontmatter(fileContents)

    return toPost(slug, data, content, calculateReadingTime(content))
  }
  catch (error) {
    console.error('Error in getPostBySlug:', error)
    return null
  }
}
