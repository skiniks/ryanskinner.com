'use client'

import type { ReactNode } from 'react'

// oxlint-disable-next-line typescript/prefer-readonly-parameter-types
export default function Template({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="rari-page-template">{children}</div>
}
