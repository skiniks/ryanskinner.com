import type { ComponentType } from 'react'
import { readFile } from 'node:fs/promises'
import { notFound } from 'rari'
import { evaluate } from 'rari/mdx'
import * as runtime from 'react/jsx-runtime'
import remarkGfm from 'remark-gfm'
import { contentFilePath } from '@/lib/content/paths'
import { withMdxEvaluateCache } from '@/lib/mdx/evaluate-cached'
import { rehypeTableWrapper } from '@/lib/mdx/rehype-table-wrapper'
import { rehypeCodeBlock } from '@/lib/mdx/remark-codeblock'
import { getHighlighter, SHIKI_THEME } from '@/lib/mdx/shiki'

interface MdxRendererProps {
  readonly filePath: string
  readonly className?: string
}

async function readContentFile(filePath: string): Promise<string | null> {
  try {
    return await readFile(contentFilePath(filePath), 'utf-8')
  }
  catch {
    return null
  }
}

async function evaluateMdx(content: string): Promise<ComponentType> {
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

export default async function MdxRenderer({
  filePath,
  className = '',
}: MdxRendererProps) {
  const content = await readContentFile(filePath)
  if (content === null || content === '')
    notFound()

  const MDXContent = await withMdxEvaluateCache(filePath, content, async () =>
    evaluateMdx(content),
  )

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
