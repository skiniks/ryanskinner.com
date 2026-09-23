import type { HighlighterCore } from '@shikijs/core'
import type { ThemedToken } from '@shikijs/types'

interface RehypeCodeBlockOptions {
  readonly highlighter: HighlighterCore
  readonly theme: string
}

interface HastText {
  readonly type: 'text'
  readonly value: string
}

interface HastElement {
  type: 'element'
  tagName: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

interface HastParent {
  type: string
  tagName?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

type HastNode = HastElement | HastText | HastParent

/* oxlint-disable typescript/prefer-readonly-parameter-types -- hast trees are mutated in place */
function isElement(node: HastNode): node is HastElement {
  return node.type === 'element' && typeof node.tagName === 'string'
}

function isText(node: HastNode): node is HastText {
  return node.type === 'text'
}

function hasChildren(node: HastNode): node is (HastElement | HastParent) & { children: HastNode[] } {
  return 'children' in node && Array.isArray(node.children)
}

function getLanguage(properties: Record<string, unknown> | undefined): string {
  const className = properties?.className
  if (!Array.isArray(className) || typeof className[0] !== 'string')
    return 'text'

  const lang = className[0].replace('language-', '')
  return lang === '' ? 'text' : lang
}

function tokenToSpan(token: ThemedToken): HastElement {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      style: { color: token.color },
    },
    children: [{ type: 'text', value: token.content }],
  }
}

export function rehypeCodeBlock({ highlighter, theme }: RehypeCodeBlockOptions) {
  return (tree: HastNode) => {
    const visit = (node: HastNode) => {
      if (isElement(node) && node.tagName === 'pre') {
        const codeNode = node.children?.[0]
        if (
          codeNode !== undefined
          && isElement(codeNode)
          && codeNode.tagName === 'code'
        ) {
          const textNode = codeNode.children?.[0]
          if (textNode !== undefined && isText(textNode)) {
            const code = textNode.value
            const lang = getLanguage(codeNode.properties)

            try {
              const tokens = highlighter.codeToTokens(code, {
                lang,
                theme,
              })

              node.properties = {
                ...node.properties,
                className: ['shiki', `language-${lang}`],
              }

              const children: HastNode[] = []
              tokens.tokens.forEach((line, i) => {
                children.push({
                  type: 'element',
                  tagName: 'span',
                  properties: { className: ['line'] },
                  children: line.map(tokenToSpan),
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
      }

      if (hasChildren(node))
        node.children.forEach(visit)
    }

    visit(tree)
  }
}
/* oxlint-enable typescript/prefer-readonly-parameter-types */
