import type { ReactNode } from 'react'
import clsx from 'clsx'

export interface PageShellProps {
  /** Page content. */
  children: ReactNode
  /** Optional class names for the wrapper. */
  className?: string
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={clsx('mx-auto min-h-[70vh] px-3 py-4 sm:px-4 lg:px-6', className)}>
      {children}
    </main>
  )
}
