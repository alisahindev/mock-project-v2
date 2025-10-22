import type { ReactNode } from 'react'
import { BottomNavigation } from './BottomNavigation'
import { TopBar } from './TopBar'

interface MobileLayoutProps {
  children: ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content */}
      <main className="pb-28 pt-16 px-4">
        {children}
      </main>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
