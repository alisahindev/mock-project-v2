import type { ReactNode } from 'react'
import { BottomNavigation } from './BottomNavigation'
import { Header } from './Header'

interface MobileLayoutProps {
  children: ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-dvh">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pb-28 pt-20 px-4 min-h-dvh">{children}</main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
