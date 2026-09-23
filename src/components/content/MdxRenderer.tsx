import type { ComponentType } from 'react'
import { readFileSync } from 'node:fs'
import { evaluate } from 'rari/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import NotFoundPage from '@/app/not-found'
import { contentFilePath } from '@/lib/content/paths'
import { rehypeTableWrapper } from '@/lib/mdx/rehype-table-wrapper'
import { rehypeCodeBlock } from '@/lib/mdx/remark-codeblock'
import { getHighlighter, SHIKI_THEME } from '@/lib/mdx/shiki'

interface MdxRendererProps {
  readonly filePath: string
  readonly className?: string
}

function readContentFile(filePath: string): string | null {
  try {
    return readFileSync(contentFilePath(filePath), 'utf-8')
  }
  catch {
    return null
  }
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
  const content = readContentFile(filePath)
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
