import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

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
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(WHITESPACE_REGEX).length
  return Math.ceil(words / wordsPerMinute)
}

function parseFrontmatter(fileContents: string) {
  const data: any = {}
  const matches = [...fileContents.matchAll(EXPORT_REGEX)]

  for (const match of matches) {
    const key = match[1]
    let value: any = match[2]

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
      value = value.slice(1, -1)
    }
    else if (value.startsWith('[') || value.startsWith('{')) {
      try {
        value = JSON.parse(value)
      }
      catch {
        console.warn(`Failed to parse JSON value for ${key}:`, value)
      }
    }

    data[key] = value
  }

  const content = fileContents.replace(FRONTMATTER_CONTENT_REGEX, '').trim()

  return { data, content }
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function getPosts(limit?: number): Promise<Post[]> {
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

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          tags: data.tags || [],
          content,
          readingTime: calculateReadingTime(content),
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return limit ? posts.slice(0, limit) : posts
  }
  catch (error) {
    console.error('Error in getPosts:', error)
    return []
  }
}

export async function getAllPosts(limit?: number): Promise<Post[]> {
  return getPosts(limit)
}

export async function getPaginatedPosts(page: number = 1, postsPerPage: number = 9): Promise<{ posts: Post[], totalPages: number, currentPage: number }> {
  try {
    const allPosts = await getPosts()
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

export async function getPostBySlug(slug: string): Promise<Post | null> {
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

    if (!fileContents)
      return null

    const { data, content } = parseFrontmatter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      content,
      readingTime: calculateReadingTime(content),
    }
  }
  catch (error) {
    console.error('Error in getPostBySlug:', error)
    return null
  }
}
