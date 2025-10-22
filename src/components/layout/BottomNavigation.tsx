import { cn } from '@/lib/utils'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { CheckCircle, Home, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navigationItems = [
  { path: '/', icon: Home, label: 'Ana Sayfa' },
  { path: '/completed', icon: CheckCircle, label: 'Tamamlanan' },
  { path: '/progress', icon: TrendingUp, label: 'İlerleme' },
]

export function BottomNavigation() {
  const location = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, height: 0, top: 0 })
  // Aktif index'i hesapla
  useEffect(() => {
    const currentIndex = navigationItems.findIndex(item => item.path === location.pathname)
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0)
  }, [location.pathname])

  // Indicator pozisyonunu hesapla
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const items = container.querySelectorAll('[data-nav-item]')
      const activeItem = items[activeIndex] as HTMLElement

      if (activeItem) {
        const containerRect = container.getBoundingClientRect()
        const itemRect = activeItem.getBoundingClientRect()

        setIndicatorStyle({
          width: itemRect.width,
          left: itemRect.left - containerRect.left,
          height: itemRect.height,
          top: itemRect.top - containerRect.top,
        })
      }
    }
  }, [activeIndex])

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.nav
        className={cn(
          'rounded-3xl relative overflow-hidden backdrop-filter blur-12 saturate-250 bg-gradient-to-br from-white/80 to-white/60 border border-white/70 shadow-2xl',
        )}
      >
        {/* Aktif durum göstergesi */}
        <motion.div
          className="absolute backdrop-filter blur-8 saturate-250 bg-gradient-to-br from-white/80 to-white/65 border border-white/80 shadow-2xl rounded-2xl"
          animate={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
            height: indicatorStyle.height,
            top: 12,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.4,
          }}
          style={{
            zIndex: 1,
          }}
        />

        <div ref={containerRef} className="flex items-center justify-around px-4 py-3 relative">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon

            return (
              <Link key={item.path} to={item.path} className="flex-1">
                <motion.div
                  data-nav-item
                  className={cn(
                    'flex flex-col items-center space-y-1 py-2 px-3 rounded-2xl transition-all duration-300 relative z-10',
                    isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground',
                  )}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="relative">
                    <Icon
                      className={clsx(
                        'h-5 w-5 transition-colors duration-300',
                        isActive ? 'text-foreground' : 'text-foreground/70',
                      )}
                    />
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </motion.nav>
    </motion.div>
  )
}
