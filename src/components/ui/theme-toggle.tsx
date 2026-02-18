'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export interface ThemeToggleProps {
  /** Optional class name for the toggle button. */
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={clsx('retro-btn inline-flex items-center justify-center', className)}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
