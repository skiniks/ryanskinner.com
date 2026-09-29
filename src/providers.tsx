'use client'

import type { ReactNode } from 'react'

// oxlint-disable-next-line typescript/prefer-readonly-parameter-types
export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
