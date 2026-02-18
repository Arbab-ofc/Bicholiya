import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/ui/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bicholiya',
  description: 'A peer-to-peer marketplace with negotiation chat and escrow.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
}

export interface RootLayoutProps {
  /** App content. */
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
