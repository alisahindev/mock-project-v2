import { Calendar, Crown, LogOut, Settings, Star, Target, Trophy, User } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export function ProfilePage() {
  const achievements = [
    { id: 1, title: 'İlk Ders', description: 'İlk dersini tamamladın', icon: Star, isUnlocked: true },
    { id: 2, title: '7 Günlük Streak', description: '7 gün üst üste pratik yaptın', icon: Trophy, isUnlocked: true },
    { id: 3, title: 'Kelime Ustası', description: '100 kelime öğrendin', icon: Target, isUnlocked: false },
    { id: 4, title: 'Dilbilgisi Uzmanı', description: '50 dilbilgisi kuralı öğrendin', icon: Crown, isUnlocked: false },
  ]

  const stats = [
    { label: 'Toplam Ders', value: '24', icon: Target },
    { label: 'Streak Günleri', value: '12', icon: Calendar },
    { label: 'Öğrenilen Kelime', value: '156', icon: Star },
    { label: 'Tamamlanan Test', value: '8', icon: Trophy },
  ]

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="text-center">
        <CardContent className="p-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">Ahmet Yılmaz</h2>
          <p className="text-white/70 mb-4">İngilizce Öğreniyor • 2. Seviye</p>

          <div className="flex items-center justify-center space-x-4 text-sm text-white/80">
            <span className="flex items-center">
              <Trophy className="h-4 w-4 mr-1" />
              12 gün streak
            </span>
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              156 kelime
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="stats" className="w-full">
        <TabsList variant="default" className="grid w-full grid-cols-2">
          <TabsTrigger variant="default" value="stats">
            İstatistikler
          </TabsTrigger>
          <TabsTrigger variant="default" value="achievements">
            Başarılar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <Icon className="h-6 w-6 text-white mx-auto mb-2" />
                    <h3 className="text-white font-semibold text-lg">{stat.value}</h3>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Progress Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-white">Haftalık İlerleme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day, index) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">{day}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.random() * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white/60 text-xs w-8">{Math.floor(Math.random() * 100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4">
            {achievements.map(achievement => {
              const Icon = achievement.icon
              return (
                <Card key={achievement.id} className="hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-full ${
                          achievement.isUnlocked ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-white/10'
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${achievement.isUnlocked ? 'text-white' : 'text-white/40'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${achievement.isUnlocked ? 'text-white' : 'text-white/60'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${achievement.isUnlocked ? 'text-white/70' : 'text-white/40'}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.isUnlocked && <Trophy className="h-5 w-5 text-yellow-400" />}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Ayarlar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="glass-secondary"
            size="default"
            className="w-full justify-start text-white hover:bg-white/20"
          >
            <Settings className="h-4 w-4 mr-3" />
            Hesap Ayarları
          </Button>
          <Button
            variant="glass-secondary"
            size="default"
            className="w-full justify-start text-white hover:bg-white/20"
          >
            <Target className="h-4 w-4 mr-3" />
            Öğrenme Hedefleri
          </Button>
          <Button
            variant="glass-secondary"
            size="default"
            className="w-full justify-start text-red-400 hover:bg-red-400/20"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Çıkış Yap
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
