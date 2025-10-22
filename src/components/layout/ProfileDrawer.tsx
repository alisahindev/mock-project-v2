'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { TextSizeModal } from '@/components/ui/text-size-modal'
import { useTheme } from '@/lib/theme-context'
import { BookOpen, ChevronRight, HelpCircle, LogOut, School, Type, User, X } from 'lucide-react'
import { useState } from 'react'

interface ProfileDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Mock data
const mockData = {
  student: {
    name: 'Ali Şahin',
    grade: '5. Sınıf',
    avatar: 'AS',
  },
  school: {
    name: 'Atatürk İlkokulu',
    teacher: 'Ayşe Yılmaz',
    class: '5-A',
  },
}

export function ProfileDrawer({ open, onOpenChange }: ProfileDrawerProps) {
  const { theme, setTheme } = useTheme()
  const [showTextSizeModal, setShowTextSizeModal] = useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const isDarkMode = theme === 'dark'

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out')
    setShowLogoutDialog(false)
    onOpenChange(false)
  }

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="left"
          className="w-80 p-0 flex flex-col bg-white/20 backdrop-blur-lg border-r border-white/20"
        >
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <SheetTitle className="text-white text-lg font-semibold">Profil</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {/* Student Profile Section */}
            <div className="p-6 text-center border-b border-white/10">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">{mockData.student.avatar}</span>
              </div>
              <h3 className="text-white text-lg font-semibold mb-1">{mockData.student.name}</h3>
              <p className="text-white/70 text-sm">{mockData.student.grade}</p>
            </div>

            {/* School Context Section */}
            <div className="p-6 border-b border-white/10">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <School className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Okul</p>
                    <p className="text-white text-sm font-medium">{mockData.school.name}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Öğretmen</p>
                    <p className="text-white text-sm font-medium">{mockData.school.teacher}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs">Sınıf</p>
                    <p className="text-white text-sm font-medium">{mockData.school.class}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Section */}
            <div className="p-6 border-b border-white/10">
              <h4 className="text-white font-semibold mb-4">Ayarlar</h4>

              <div className="space-y-4">
                {/* Text Size Setting */}
                <button
                  onClick={() => setShowTextSizeModal(true)}
                  className="w-full flex items-center justify-between p-3 rounded-lg glass-interactive hover:glass-hover transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Type className="h-4 w-4 text-white/70" />
                    </div>
                    <span className="text-white font-medium">Aa Metin Boyutu</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/50" />
                </button>

                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-between p-3 rounded-lg glass-card border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white/70 text-sm">🌓</span>
                    </div>
                    <span className="text-white font-medium">Karanlık Mod</span>
                  </div>
                  <Switch
                    variant="glass"
                    checked={isDarkMode}
                    onCheckedChange={checked => setTheme(checked ? 'dark' : 'light')}
                  />
                </div>
              </div>
            </div>

            {/* Help Option */}
            <div className="p-6 border-b border-white/10">
              <button
                className="w-full flex items-center space-x-3 p-3 rounded-lg glass-interactive hover:glass-hover transition-all duration-200 opacity-50 cursor-not-allowed"
                disabled
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <HelpCircle className="h-4 w-4 text-white/70" />
                </div>
                <span className="text-white font-medium">❓ Yardım</span>
              </button>
            </div>

            {/* Logout Option */}
            <div className="p-6">
              <button
                onClick={() => setShowLogoutDialog(true)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg glass-interactive hover:glass-hover transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <LogOut className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-red-400 font-medium">🚪 Çıkış Yap</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Text Size Modal */}
      <TextSizeModal open={showTextSizeModal} onOpenChange={setShowTextSizeModal} />

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent variant="glass">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Çıkış Yap</AlertDialogTitle>
            <AlertDialogDescription className="text-white/70">
              Çıkış yapmak istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="glass-button-secondary text-white">İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white">
              Çıkış Yap
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
