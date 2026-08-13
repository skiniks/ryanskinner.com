import type { ComponentType } from 'react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { evaluate } from 'rari/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import NotFoundPage from '@/app/not-found'
import { rehypeTableWrapper } from '@/lib/rehype-table-wrapper'
import { rehypeCodeBlock } from '@/lib/remark-codeblock'
import { getHighlighter, SHIKI_THEME } from '@/lib/shiki'

interface MdxRendererProps {
  readonly filePath: string
  readonly className?: string
}

function findContentFile(filePath: string): string | null {
  const searchPaths = [
    resolve(cwd(), 'public', 'content', filePath),
    resolve(cwd(), 'content', filePath),
    resolve(cwd(), 'dist', 'content', filePath),
  ]

  for (const path of searchPaths) {
    try {
      return readFileSync(path, 'utf-8')
    }
    catch {}
  }

  return null
}

async function loadMdxContent(content: string): Promise<ComponentType | null> {
  try {
    const highlighter = await getHighlighter()

    const { default: MDXContent } = await evaluate(content, {
      ...runtime,
      baseUrl: import.meta.url,
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypeCodeBlock,
          {
            highlighter,
            theme: SHIKI_THEME,
          },
        ],
        rehypeTableWrapper,
      ],
    })

    return MDXContent
  }
  catch (error) {
    console.error('Error in MdxRenderer:', error)
    return null
  }
}

export default async function MdxRenderer({
  filePath,
  className = '',
}: MdxRendererProps) {
  const content = findContentFile(filePath)
  if (content === null || content === '')
    return <NotFoundPage />

  const MDXContent = await loadMdxContent(content)
  if (MDXContent === null)
    return <NotFoundPage />

  return (
    <div
      className={`prose prose-invert max-w-none overflow-hidden ${className}`}
      style={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}
    >
      <MDXContent />
    </div>
  )
}
