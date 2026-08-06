interface HastNode {
  type?: string
  tagName?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

function isHastNode(value: unknown): value is HastNode {
  return typeof value === 'object' && value !== null
}

/* oxlint-disable typescript/prefer-readonly-parameter-types -- hast trees are mutated in place */
export function rehypeTableWrapper() {
  return (tree: { children?: HastNode[] }) => {
    visit(tree, node => node.tagName === 'table')
  }
}

function visit(
  node: { children?: HastNode[] },
  test: (node: HastNode) => boolean,
): void {
  if (node.children === undefined)
    return

  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i]
    if (!isHastNode(child))
      continue

    if (test(child)) {
      node.children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-wrapper'] },
        children: [child],
      }
    }
    else {
      visit(child, test)
    }
  }
}
/* oxlint-enable typescript/prefer-readonly-parameter-types */
