'use client'

import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './sheet'

interface TextSizeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const textSizes = [
  { value: 14, label: 'Küçük', description: '14px' },
  { value: 16, label: 'Normal', description: '16px' },
  { value: 18, label: 'Büyük', description: '18px' },
  { value: 20, label: 'Çok Büyük', description: '20px' },
  { value: 22, label: 'En Büyük', description: '22px' },
]

export function TextSizeModal({ open, onOpenChange }: TextSizeModalProps) {
  const [selectedSize, setSelectedSize] = useState(16)

  useEffect(() => {
    // Load saved text size from localStorage
    const savedSize = localStorage.getItem('textSize')
    if (savedSize) {
      setSelectedSize(parseInt(savedSize, 10))
    }
  }, [])

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size)
    localStorage.setItem('textSize', size.toString())
    // Apply text size to document
    document.documentElement.style.fontSize = `${size}px`
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" variant="glass" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-white">Metin Boyutu</SheetTitle>
          <SheetDescription className="text-white/70">Uygulamada kullanılacak metin boyutunu seçin</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-3">
          {textSizes.map(size => (
            <button
              key={size.value}
              onClick={() => handleSizeSelect(size.value)}
              className={cn(
                'w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200',
                'glass-interactive hover:glass-hover',
                selectedSize === size.value ? 'glass-button-active border-primary/50' : 'glass-card border-white/20',
              )}
            >
              <div className="flex flex-col items-start">
                <span className="text-white font-medium">{size.label}</span>
                <span className="text-white/60 text-sm">{size.description}</span>
              </div>

              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    fontSize: `${size.value}px`,
                    backgroundColor:
                      selectedSize === size.value ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Aa
                </div>
                {selectedSize === size.value && <Check className="h-5 w-5 text-white" />}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="p-4 rounded-lg glass-card border-white/20">
            <h4 className="text-white font-medium mb-2">Önizleme</h4>
            <div className="text-white/80 leading-relaxed" style={{ fontSize: `${selectedSize}px` }}>
              <p className="mb-2">Bu, seçtiğiniz metin boyutunun nasıl görüneceğinin önizlemesidir.</p>
              <p className="text-sm opacity-70">Normal metin boyutu: {selectedSize}px</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="glass-primary" onClick={() => onOpenChange(false)} className="min-w-[100px]">
            Tamam
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
