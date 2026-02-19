export function rehypeTableWrapper() {
  return (tree: { children: unknown[] }) => {
    visit(tree, (node: Record<string, unknown>) => {
      if (node.tagName === 'table')
        return true

      return false
    })
  }
}

function visit(
  node: Record<string, unknown>,
  test: (node: Record<string, unknown>) => boolean,
) {
  if (Array.isArray(node.children)) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i] as Record<string, unknown>
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
}
