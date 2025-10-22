import { BookOpen, Brain, Clock, Target, Trophy, Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export function PracticePage() {
  const practiceTypes = [
    {
      id: 1,
      title: 'Hızlı Test',
      description: '5 dakikalık hızlı pratik',
      icon: Zap,
      duration: '5 dk',
      difficulty: 'Kolay',
      questions: 10
    },
    {
      id: 2,
      title: 'Kelime Pratiği',
      description: 'Kelime bilginizi test edin',
      icon: Brain,
      duration: '15 dk',
      difficulty: 'Orta',
      questions: 25
    },
    {
      id: 3,
      title: 'Dilbilgisi Testi',
      description: 'Dilbilgisi kurallarını pekiştirin',
      icon: BookOpen,
      duration: '20 dk',
      difficulty: 'Zor',
      questions: 30
    }
  ]

  const recentResults = [
    { type: 'Hızlı Test', score: 8, total: 10, date: 'Bugün' },
    { type: 'Kelime Pratiği', score: 22, total: 25, date: 'Dün' },
    { type: 'Dilbilgisi Testi', score: 18, total: 30, date: '2 gün önce' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Pratik 🎯</h2>
        <p className="text-white/80">Becerilerini test et ve geliştir</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card variant="default" className="text-center">
          <CardContent className="p-4">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">12</h3>
            <p className="text-white/70 text-sm">Günlük Streak</p>
          </CardContent>
        </Card>
        
        <Card variant="elevated" className="text-center">
          <CardContent className="p-4">
            <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">85%</h3>
            <p className="text-white/70 text-sm">Ortalama Doğruluk</p>
          </CardContent>
        </Card>
      </div>

      {/* Practice Types */}
      <div className="space-y-4">
        <h3 className="text-white font-semibold text-lg">Pratik Türleri</h3>
        {practiceTypes.map((practice) => {
          const Icon = practice.icon
          return (
            <Card key={practice.id} variant="default" className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-linear-to-br from-blue-400 to-purple-500">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-white">{practice.title}</CardTitle>
                    <CardDescription className="text-white/70">{practice.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {practice.duration}
                    </span>
                    <span>{practice.difficulty}</span>
                    <span>{practice.questions} soru</span>
                  </div>
                  
                  <Button variant="primary" size="default-text" className="w-full">
                    Başla
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Results */}
      <Card variant="subtle">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Son Sonuçlar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/10">
                <div>
                  <h4 className="text-white font-medium">{result.type}</h4>
                  <p className="text-white/60 text-sm">{result.date}</p>
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold">
                    {result.score}/{result.total}
                  </span>
                  <p className="text-white/60 text-sm">
                    {Math.round((result.score / result.total) * 100)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
