import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional additional class names for the skeleton element. */
  className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx(
        'animate-pulse rounded-sm bg-[var(--bg-inset)] border-3 border-[var(--border-strong)]',
        className
      )}
      {...props}
    />
  )
}
