'use client'

import { Bell, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export interface HeaderProps {
  /** Callback for opening the navigation drawer. */
  onMenuClick: () => void
  /** Whether to show the notification bell. */
  showNotifications?: boolean
  /** Unread notifications count. */
  unreadCount?: number
  /** Callback for notification bell click. */
  onNotificationsClick?: () => void
}

export function Header({
  onMenuClick,
  showNotifications = false,
  unreadCount = 0,
  onNotificationsClick,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 6)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const displayCount = unreadCount > 99 ? '99+' : unreadCount.toString()

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 border-b-3 border-[var(--border-strong)] bg-[var(--bg-elevated)]',
        isScrolled && 'shadow-[4px_4px_0px_var(--shadow-dark)]'
      )}
    >
      <div className="mx-auto flex items-center justify-between px-3 py-2 sm:px-4 lg:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="retro-btn flex h-10 w-10 items-center justify-center"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="text-center">
          <span className="font-heading text-[clamp(1.1rem,2.2vw,1.6rem)] font-semibold">
            Bicholiya
          </span>
        </div>
        {showNotifications ? (
          <button
            type="button"
            onClick={onNotificationsClick}
            className="retro-btn relative flex h-10 w-10 items-center justify-center"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 ? (
              <span className="absolute -right-1 -top-1 rounded-sm border-2 border-[var(--border-strong)] bg-[#8B1E1E] px-1 text-[10px] font-semibold text-white">
                {displayCount}
              </span>
            ) : null}
          </button>
        ) : (
          <div className="h-10 w-10" />
        )}
      </div>
    </header>
  )
}
