import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface RetroInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional additional class names for the input. */
  className?: string
}

export const RetroInput = forwardRef<HTMLInputElement, RetroInputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={clsx('retro-input', className)} {...props} />
  }
)

RetroInput.displayName = 'RetroInput'
