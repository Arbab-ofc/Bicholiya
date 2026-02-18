'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import clsx from 'clsx'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export type NavRole = 'GUEST' | 'USER' | 'ADMIN'

export interface NavUser {
  /** Display name of the user. */
  name?: string
  /** Email of the user. */
  email?: string
  /** Avatar URL of the user. */
  avatarUrl?: string
}

export interface NavDrawerProps {
  /** Whether the drawer is open. */
  open: boolean
  /** Close handler for the drawer. */
  onClose: () => void
  /** Current user role. */
  role: NavRole
  /** Optional user profile info. */
  user?: NavUser
  /** Unread notifications count. */
  unreadCount?: number
  /** Logout handler. */
  onLogout?: () => void
}

const baseLinks = [{ label: 'Home', href: '/' }]

const guestLinks = [
  ...baseLinks,
  { label: 'Browse Listings', href: '/' },
  { label: 'Rules', href: '/rules' },
  { label: 'Login', href: '/login' },
  { label: 'Signup', href: '/signup' },
]

const userLinks = [
  ...baseLinks,
  { label: 'Browse', href: '/' },
  { label: 'Rules', href: '/rules' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'My Listings', href: '/dashboard/listings' },
  { label: 'Chats', href: '/dashboard/chats' },
  { label: 'Deals', href: '/dashboard/deals' },
  { label: 'Notifications', href: '/notifications', showUnread: true },
  { label: 'Settings', href: '/settings/profile' },
]

export function NavDrawer({
  open,
  onClose,
  role,
  user,
  unreadCount = 0,
  onLogout,
}: NavDrawerProps) {
  const pathname = usePathname()
  const links = role === 'GUEST' ? guestLinks : userLinks

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-xs flex-col border-l-3 border-[var(--border-strong)] bg-[var(--bg-elevated)] shadow-[4px_0_0px_var(--shadow-dark)]"
          >
            <div className="retro-titlebar">
              <span className="font-heading text-base font-semibold">Bicholiya</span>
            </div>
            {role !== 'GUEST' ? (
              <div className="flex items-center gap-3 border-b-3 border-[var(--border-strong)] p-3">
                {user?.avatarUrl ? (
                  <Image
                    src={user.avatarUrl}
                    alt={user.name ?? 'User avatar'}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-sm border-3 border-[var(--border-strong)] object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border-3 border-[var(--border-strong)] bg-[var(--bg-inset)] text-sm font-semibold">
                    {user?.name?.charAt(0)?.toUpperCase() ?? 'U'}
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{user?.name ?? 'User'}</span>
                    {role === 'ADMIN' ? (
                      <span className="rounded-sm border-2 border-[var(--border-strong)] bg-[var(--accent)] px-1 text-[10px] font-semibold text-white">
                        ADMIN
                      </span>
                    ) : null}
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">{user?.email}</span>
                </div>
              </div>
            ) : null}
            <nav className="flex-1 overflow-y-auto p-3">
              <ul className="space-y-2">
                {links.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={clsx(
                          'flex items-center justify-between rounded-sm border-3 border-[var(--border-strong)] px-3 py-2 text-sm font-semibold',
                          isActive
                            ? 'bg-[var(--accent)] text-white'
                            : 'bg-[var(--bg-elevated)] text-[var(--text)]'
                        )}
                        onClick={onClose}
                      >
                        <span>{link.label}</span>
                        {link.showUnread && unreadCount > 0 ? (
                          <span className="rounded-sm border-2 border-[var(--border-strong)] bg-[#8B1E1E] px-1 text-[10px] font-semibold text-white">
                            {unreadCount > 99 ? '99+' : unreadCount}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  )
                })}
                {role !== 'GUEST' ? (
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        onLogout?.()
                        onClose()
                      }}
                      className="flex w-full items-center justify-between rounded-sm border-3 border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-2 text-sm font-semibold"
                    >
                      Logout
                    </button>
                  </li>
                ) : null}
                {role === 'ADMIN' ? (
                  <li>
                    <Link
                      href="/admin"
                      className={clsx(
                        'flex items-center justify-between rounded-sm border-3 border-[var(--border-strong)] px-3 py-2 text-sm font-semibold',
                        pathname.startsWith('/admin')
                          ? 'bg-[var(--accent)] text-white'
                          : 'bg-[var(--bg-elevated)] text-[var(--text)]'
                      )}
                      onClick={onClose}
                    >
                      <span>Admin Dashboard</span>
                      <span className="rounded-sm border-2 border-[var(--border-strong)] bg-[var(--accent)] px-1 text-[10px] font-semibold text-white">
                        ADMIN
                      </span>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
            <div className="border-t-3 border-[var(--border-strong)] p-3">
              <ThemeToggle />
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  )
}
