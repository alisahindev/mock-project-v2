import { BookOpen, Play, Target, TrendingUp, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AssignmentList } from '../components/ui/assignment-card'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function HomePage() {
  // Örnek assignment verileri
  const assignments = [
    {
      title: 'Restoranda Sipariş Verme',
      learningObjective: 'Kibar istekler öğren',
      category: 'Günlük Yaşam',
      deadline: 'Cuma',
      backgroundImage:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      progress: 65,
      isOngoing: true,
      socialProof: 'Çoğu sınıf arkadaşı bitti!',
      onCardClick: () => console.log('Devam eden atama tıklandı'),
    },
    {
      title: 'Seyahat Planlama',
      learningObjective: 'Tercihleri ifade et',
      category: 'Seyahat',
      deadline: 'Pazartesi',
      backgroundImage:
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80',
      onCardClick: () => console.log('Yeni atama tıklandı'),
    },
    {
      title: 'Doktor Randevusu',
      learningObjective: 'Sağlık durumunu açıkla',
      category: 'Sağlık',
      deadline: 'Çarşamba',
      backgroundImage:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      onCardClick: () => console.log('Sağlık ataması tıklandı'),
    },
    {
      title: 'Alışveriş Yapma',
      learningObjective: 'Fiyat sorma ve pazarlık etme',
      category: 'Günlük Yaşam',
      deadline: 'Perşembe',
      backgroundImage:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      onCardClick: () => console.log('Alışveriş ataması tıklandı'),
    },
    {
      title: 'İş Görüşmesi',
      learningObjective: 'Kendini tanıtma ve deneyimlerini anlatma',
      category: 'İş',
      deadline: 'Salı',
      backgroundImage:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      onCardClick: () => console.log('İş görüşmesi ataması tıklandı'),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Merhaba! 👋</h2>
        <p className="text-white/80 text-sm sm:text-base">Bugün hangi dil becerini geliştirmek istiyorsun?</p>
      </div>

      {/* Assignment Cards Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-white">Atamalar</h3>
        <AssignmentList assignments={assignments} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link to="/lessons">
          <Card className="hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="font-semibold text-white">Dersler</h3>
              <p className="text-white/70 text-sm">Yeni konular öğren</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/practice">
          <Card className="hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="font-semibold text-white">Pratik</h3>
              <p className="text-white/70 text-sm">Becerilerini test et</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Progress Overview */}
      <Card>
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
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Devam Et</CardTitle>
          <CardDescription className="text-white/70">Son kaldığın yerden devam et</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">Temel Kelimeler - Ders 3</h4>
                <p className="text-white/60 text-sm">İngilizce • 15 dakika</p>
              </div>
              <Button variant="glass-primary" size="default">
                <Play className="h-4 w-4 mr-2" />
                Devam Et
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Content for Scroll Testing */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-white">Günlük Hedefler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/80">5 yeni kelime öğren</span>
              <span className="text-green-400">✓ Tamamlandı</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">10 dakika dinleme pratiği</span>
              <span className="text-yellow-400">3/10 dakika</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">1 ders tamamla</span>
              <span className="text-green-400">✓ Tamamlandı</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-white">Son Başarılar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">İlk Ders Tamamlandı!</h4>
                <p className="text-white/60 text-sm">2 saat önce</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-medium">7 Günlük Streak!</h4>
                <p className="text-white/60 text-sm">1 gün önce</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-white">Önerilen İçerik</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/10">
              <div>
                <h4 className="text-white font-medium">Günlük Konuşma</h4>
                <p className="text-white/60 text-sm">Temel diyaloglar</p>
              </div>
              <Button variant="glass-primary" size="sm" className="text-white">
                <Play className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/10">
              <div>
                <h4 className="text-white font-medium">Telaffuz Pratiği</h4>
                <p className="text-white/60 text-sm">Sesli alıştırmalar</p>
              </div>
              <Button variant="glass-primary" size="sm" className="text-white">
                <Play className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Extra content for scroll testing */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-2">Dil Öğrenme İpuçları</h3>
              <p className="text-white/80 text-sm">
                Her gün az da olsa pratik yapmak, haftada bir uzun seans yapmaktan daha etkilidir. Günde 15-20 dakika
                ayırarak tutarlı bir ilerleme kaydedebilirsin.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-2">Topluluk</h3>
              <p className="text-white/80 text-sm">
                Diğer öğrencilerle bağlantı kur ve deneyimlerini paylaş. Birlikte öğrenmek daha eğlenceli ve motivasyon
                artırıcıdır.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
