'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { ReactNode } from 'react'
import clsx from 'clsx'

export interface RetroModalProps {
  /** Controls the open state of the modal. */
  open: boolean
  /** Callback invoked when the open state changes. */
  onOpenChange: (open: boolean) => void
  /** Modal title displayed in the titlebar. */
  title: string
  /** Modal body content. */
  children: ReactNode
  /** Optional footer content. */
  footer?: ReactNode
  /** Optional class names for the modal container. */
  className?: string
}

export function RetroModal({
  open,
  onOpenChange,
  title,
  children,
  footer,
  className,
}: RetroModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={clsx(
                  'fixed inset-x-0 bottom-0 z-50 flex w-full justify-center sm:inset-0 sm:items-center',
                  className
                )}
              >
                <div className="retro-window max-h-[90vh] w-full overflow-hidden sm:max-w-lg">
                  <div className="retro-titlebar flex items-center justify-between">
                    <Dialog.Title className="font-heading text-sm font-semibold">
                      {title}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="rounded-sm border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] px-1"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto p-3 sm:p-4 lg:p-6">
                    {children}
                  </div>
                  {footer ? (
                    <div className="border-t-3 border-[var(--border-strong)] p-3 sm:p-4">
                      {footer}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}
