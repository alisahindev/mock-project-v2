import { BookOpen, Play, Target, TrendingUp, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Merhaba! 👋</h2>
        <p className="text-white/80">Bugün hangi dil becerini geliştirmek istiyorsun?</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/lessons">
          <Card variant="default" className="hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="font-semibold text-white">Dersler</h3>
              <p className="text-white/70 text-sm">Yeni konular öğren</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/practice">
          <Card variant="elevated" className="hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="font-semibold text-white">Pratik</h3>
              <p className="text-white/70 text-sm">Becerilerini test et</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Progress Overview */}
      <Card variant="default">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            İlerleme Durumu
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/80">Bu hafta tamamlanan dersler</span>
            <span className="text-white font-semibold">5/7</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-linear-to-r from-green-400 to-blue-500 h-2 rounded-full" style={{ width: '71%' }}></div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white/80">Streak günleri</span>
            <span className="text-white font-semibold flex items-center">
              <Trophy className="h-4 w-4 mr-1" />
              12 gün
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Continue Learning */}
      <Card variant="subtle">
        <CardHeader>
          <CardTitle className="text-white">Devam Et</CardTitle>
          <CardDescription className="text-white/70">
            Son kaldığın yerden devam et
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Temel Kelimeler - Ders 3</h4>
                <p className="text-white/60 text-sm">İngilizce • 15 dakika</p>
              </div>
              <Button variant="primary" size="default">
                <Play className="h-4 w-4 mr-2" />
                Devam Et
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
