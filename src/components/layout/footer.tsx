import { Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t-3 border-[var(--border-strong)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid gap-4 px-3 py-6 sm:px-4 lg:grid-cols-3 lg:px-6">
        <div className="text-sm font-semibold">
          © {new Date().getFullYear()} Bicholiya. All rights reserved.
        </div>
        <div className="text-sm font-semibold">Created and designed by Arbab</div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>arbabprvt@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Patna, Bihar, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
