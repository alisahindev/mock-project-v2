import { Bell, Globe, HelpCircle, Info, Moon, Settings, Shield, Sun, Volume2, VolumeX } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useTheme } from '../lib/theme-context'

export function SettingsPage() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Ayarlar ⚙️</h2>
        <p className="text-white/80">Uygulamanızı kişiselleştirin</p>
      </div>

      {/* Profile Settings */}
      <Card variant="default">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Profil Ayarları
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Ad Soyad</label>
            <Input variant="default" placeholder="Adınızı girin" />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">E-posta</label>
            <Input variant="filled" type="email" placeholder="E-posta adresinizi girin" />
          </div>
          <Button variant="primary" size="default-text" className="w-full">
            Profili Güncelle
          </Button>
        </CardContent>
      </Card>

      {/* Learning Preferences */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-white">Öğrenme Tercihleri</CardTitle>
          <CardDescription className="text-white/70">Öğrenme deneyiminizi kişiselleştirin</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-white" />
              <div>
                <h4 className="text-white font-medium">Hatırlatıcılar</h4>
                <p className="text-white/70 text-sm">Günlük öğrenme hatırlatıcıları</p>
              </div>
            </div>
            <Button variant="secondary" size="default">
              Açık
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Volume2 className="h-5 w-5 text-white" />
              <div>
                <h4 className="text-white font-medium">Ses Efektleri</h4>
                <p className="text-white/70 text-sm">Uygulama ses efektleri</p>
              </div>
            </div>
            <Button variant="secondary" size="default">
              Açık
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-white" />
              <div>
                <h4 className="text-white font-medium">Dil</h4>
                <p className="text-white/70 text-sm">Uygulama dili</p>
              </div>
            </div>
            <Button variant="ghost" size="default" className="text-white">
              Türkçe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card variant="subtle">
        <CardHeader>
          <CardTitle className="text-white">Görünüm</CardTitle>
          <CardDescription className="text-white/70">Tema ve görsel ayarlar</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sun className="h-5 w-5 text-white" />
              <div>
                <h4 className="text-white font-medium">Tema</h4>
                <p className="text-white/70 text-sm">
                  {theme === 'light' ? 'Açık tema aktif' : theme === 'dark' ? 'Koyu tema aktif' : 'Sistem teması'}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={theme === 'light' ? 'primary' : 'secondary'}
                size="default"
                onClick={() => setTheme('light')}
                className={theme === 'light' ? 'bg-blue-500/20 border-blue-400/40' : ''}
                title="Açık tema"
              >
                <Sun className="h-4 w-4" />
              </Button>
              <Button
                variant={theme === 'dark' ? 'primary' : 'ghost'}
                size="default"
                className={theme === 'dark' ? 'bg-blue-500/20 border-blue-400/40 text-white' : 'text-white/60'}
                onClick={() => setTheme('dark')}
                title="Koyu tema"
              >
                <Moon className="h-4 w-4" />
              </Button>
              <Button
                variant={theme === 'system' ? 'primary' : 'ghost'}
                size="default"
                className={theme === 'system' ? 'bg-blue-500/20 border-blue-400/40 text-white' : 'text-white/60'}
                onClick={() => setTheme('system')}
                title="Sistem teması"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <VolumeX className="h-5 w-5 text-white" />
              <div>
                <h4 className="text-white font-medium">Animasyonlar</h4>
                <p className="text-white/70 text-sm">Geçiş animasyonları</p>
              </div>
            </div>
            <Button variant="secondary" size="default">
              Açık
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card variant="default">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Gizlilik ve Güvenlik
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="ghost" size="default-text" className="w-full justify-start text-white hover:bg-white/20">
            <Shield className="h-4 w-4 mr-3" />
            Gizlilik Politikası
          </Button>
          <Button variant="ghost" size="default-text" className="w-full justify-start text-white hover:bg-white/20">
            <Settings className="h-4 w-4 mr-3" />
            Veri Yönetimi
          </Button>
        </CardContent>
      </Card>

      {/* Support */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-white">Destek</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="ghost" size="default-text" className="w-full justify-start text-white hover:bg-white/20">
            <HelpCircle className="h-4 w-4 mr-3" />
            Yardım Merkezi
          </Button>
          <Button variant="ghost" size="default-text" className="w-full justify-start text-white hover:bg-white/20">
            <Info className="h-4 w-4 mr-3" />
            Hakkında
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
