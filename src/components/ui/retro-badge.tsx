import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-sm border-3 px-2 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'border-[var(--border-strong)] bg-[var(--bg-elevated)]',
        accent: 'border-[var(--accent)] bg-[var(--bg-elevated)] text-[var(--accent)]',
        success: 'border-[#2C6E49] bg-[#E7F4ED] text-[#1E4E35]',
        danger: 'border-[#8B1E1E] bg-[#FBEAEA] text-[#6B1010]',
        muted: 'border-[var(--border)] bg-[var(--bg-inset)] text-[var(--text-muted)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface RetroBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional additional class names for the badge. */
  className?: string
}

export function RetroBadge({ className, variant, ...props }: RetroBadgeProps) {
  return <span className={clsx(badgeVariants({ variant }), className)} {...props} />
}
