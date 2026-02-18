'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Loader2, type LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'retro-btn inline-flex items-center justify-center gap-2 rounded-sm',
  {
    variants: {
      variant: {
        primary: 'text-[var(--text)]',
        secondary: 'bg-[var(--bg-inset)] text-[var(--text)]',
        danger: 'bg-[#8B1E1E] text-[#F5F0E8]',
        ghost: 'bg-transparent shadow-none border-3 border-[var(--border-strong)]',
      },
      size: {
        sm: 'text-xs px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface RetroButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Optional left icon component. */
  leftIcon?: LucideIcon
  /** Optional right icon component. */
  rightIcon?: LucideIcon
  /** Whether the button is in loading state. */
  isLoading?: boolean
}

export function RetroButton({
  className,
  variant,
  size,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  isLoading = false,
  disabled,
  children,
  ...props
}: RetroButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <motion.button
      type="button"
      whileTap={isDisabled ? undefined : { scale: 0.96 }}
      className={clsx(
        buttonVariants({ variant, size }),
        isDisabled && 'opacity-60 cursor-not-allowed shadow-none',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {!isLoading && LeftIcon ? <LeftIcon className="h-4 w-4" /> : null}
      <span>{children}</span>
      {!isLoading && RightIcon ? <RightIcon className="h-4 w-4" /> : null}
    </motion.button>
  )
}
