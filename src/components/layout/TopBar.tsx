import { Bell, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-filter blur-8 saturate-180 bg-linear-to-r from-white/25 to-white/15 border-b border-white/30 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo/Title */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <h1 className="text-white font-semibold text-lg">LanguageApp</h1>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="default" className="text-white hover:bg-white/20">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="default" className="text-white hover:bg-white/20"
          asChild
          >
            <Link
            to="/settings"
            >
              <Settings className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
