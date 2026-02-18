import clsx from 'clsx'
import type { ReactNode } from 'react'

export interface RetroTitlebarProps {
  /** Title text shown in the titlebar. */
  title: string
  /** Optional right-side content. */
  children?: ReactNode
  /** Optional class names for the titlebar container. */
  className?: string
}

export function RetroTitlebar({ title, children, className }: RetroTitlebarProps) {
  return (
    <div className={clsx('retro-titlebar', className)}>
      <span className="font-heading text-sm font-semibold">{title}</span>
      {children ? <div className="ml-auto flex items-center gap-2">{children}</div> : null}
    </div>
  )
}
