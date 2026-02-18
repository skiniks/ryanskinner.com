import type { HighlighterCore } from '@shikijs/core'

interface RehypeCodeBlockOptions {
  highlighter: HighlighterCore
  theme: string
}

export function rehypeCodeBlock({ highlighter, theme }: RehypeCodeBlockOptions) {
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === 'element' && node.tagName === 'pre') {
        const codeNode = node.children?.[0]
        if (codeNode?.tagName === 'code' && codeNode.children?.[0]?.type === 'text') {
          const code = codeNode.children[0].value
          const lang = codeNode.properties?.className?.[0]?.replace('language-', '') || 'text'

          try {
            const tokens = highlighter.codeToTokens(code, {
              lang,
              theme,
            })

            node.properties = {
              ...node.properties,
              className: ['shiki', `language-${lang}`],
            }

            const children: any[] = []
            tokens.tokens.forEach((line: any, i: number) => {
              children.push({
                type: 'element',
                tagName: 'span',
                properties: { className: ['line'] },
                children: line.map((token: any) => ({
                  type: 'element',
                  tagName: 'span',
                  properties: {
                    style: { color: token.color },
                  },
                  children: [{ type: 'text', value: token.content }],
                })),
              })
              if (i < tokens.tokens.length - 1)
                children.push({ type: 'text', value: '\n' })
            })

            node.children = [
              {
                type: 'element',
                tagName: 'code',
                properties: {},
                children,
              },
            ]
          }
          catch (error) {
            console.warn(`Failed to highlight ${lang}:`, error)
          }
        }
      }

      if (node.children)
        node.children.forEach(visit)
    }

    visit(tree)
  }
}
