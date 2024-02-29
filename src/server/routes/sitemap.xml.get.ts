import { promises as fs } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://ryanskinner.com'
  const contentDirectory = path.join(process.cwd(), 'content/posts')
  const files = await fs.readdir(contentDirectory)

  const urls = await Promise.all(files.filter(file => file.endsWith('.md')).map(async (file) => {
    const filePath = path.join(contentDirectory, file)
    const content = await fs.readFile(filePath, 'utf-8')
    const match = content.match(/date:\s*(.+)/)
    const date = match ? new Date(match[1]).toISOString() : new Date().toISOString()
    const urlPath = `/posts/${file.replace('.md', '')}`

    return `
      <url>
        <loc>${baseUrl}${urlPath}</loc>
        <lastmod>${date}</lastmod>
      </url>
    `
  }))

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('')}
    </urlset>
  `.trim()

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
