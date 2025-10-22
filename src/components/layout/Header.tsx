import { AnimatePresence, motion } from 'framer-motion'
import { Flame, Trophy, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { Card } from '../ui/card'
import { ProfileDrawer } from './ProfileDrawer'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 will-change-transform',
        isScrolled
          ? 'glass-header bg-linear-to-br from-white/25 via-white/15 to-white/10 border-b border-white/30 shadow-lg'
          : 'bg-transparent',
      )}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={() => setIsProfileDrawerOpen(true)}
              animate={{
                width: isScrolled ? 32 : 48,
                height: isScrolled ? 32 : 48,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform' }}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
              aria-label="Open profile drawer"
            >
              <div className="w-full h-full rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ willChange: 'transform' }}
                >
                  <User className="text-white h-6 w-6" />
                </motion.div>
              </div>
            </motion.button>

            <motion.div
              animate={{
                width: isScrolled ? 'auto' : 'auto',
                opacity: 1,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden will-change-transform"
            >
              <div className="flex flex-col whitespace-nowrap">
                <h2 className="text-white font-semibold text-md">Ali Şahin</h2>
                <AnimatePresence>
                  {!isScrolled && (
                    <motion.p
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="text-white/70 text-xs overflow-hidden"
                    >
                      Level 12 • 2,450 XP
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center space-x-2">
            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform' }}
            >
              <Card className={cn('transition-all duration-300', isScrolled ? 'px-2 py-1' : 'p-2')}>
                <Flame className="text-orange-400 h-4 w-4" />
              </Card>
            </motion.div>

            <motion.div
              animate={{
                scale: isScrolled ? 0.85 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform' }}
            >
              <Card className={cn('transition-all duration-300', isScrolled ? 'px-2 py-1' : 'p-2')}>
                <Trophy className="text-yellow-400 h-4 w-4" />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Profile Drawer */}
      <ProfileDrawer open={isProfileDrawerOpen} onOpenChange={setIsProfileDrawerOpen} />
    </motion.header>
  )
}
