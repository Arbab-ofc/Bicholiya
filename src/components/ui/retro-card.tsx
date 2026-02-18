'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export type RetroTitlebarColor = 'default' | 'accent' | 'danger' | 'success'

export interface RetroCardProps {
  /** Optional title to render in the card titlebar. */
  title?: string
  /** Titlebar color variant. */
  titlebarColor?: RetroTitlebarColor
  /** Card content. */
  children: ReactNode
  /** Optional additional class names for the card container. */
  className?: string
}

const titlebarStyles: Record<RetroTitlebarColor, string> = {
  default: 'retro-titlebar',
  accent: 'retro-titlebar bg-[var(--accent)]',
  danger: 'retro-titlebar bg-[#8B1E1E]',
  success: 'retro-titlebar bg-[#2C6E49]',
}

export function RetroCard({
  title,
  titlebarColor = 'default',
  children,
  className,
}: RetroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      className={clsx('retro-window', className)}
    >
      {title ? (
        <div className={titlebarStyles[titlebarColor]}>
          <span className="font-heading text-sm font-semibold">{title}</span>
        </div>
      ) : null}
      <div className="p-3 sm:p-4 lg:p-6">{children}</div>
    </motion.div>
  )
}
