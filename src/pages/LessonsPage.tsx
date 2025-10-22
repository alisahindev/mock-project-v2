import { BookOpen, Clock, Lock, Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export function LessonsPage() {
  const lessons = [
    {
      id: 1,
      title: 'Temel Kelimeler',
      description: 'Günlük hayatta kullanılan temel kelimeler',
      duration: '15 dk',
      difficulty: 'Başlangıç',
      progress: 60,
      isCompleted: false,
      isLocked: false
    },
    {
      id: 2,
      title: 'Sayılar ve Renkler',
      description: 'Sayıları ve renkleri öğren',
      duration: '20 dk',
      difficulty: 'Başlangıç',
      progress: 100,
      isCompleted: true,
      isLocked: false
    },
    {
      id: 3,
      title: 'Aile ve İlişkiler',
      description: 'Aile üyeleri ve ilişki terimleri',
      duration: '25 dk',
      difficulty: 'Orta',
      progress: 0,
      isCompleted: false,
      isLocked: true
    },
    {
      id: 4,
      title: 'Yemek ve İçecek',
      description: 'Restoran ve mutfak terimleri',
      duration: '30 dk',
      difficulty: 'Orta',
      progress: 0,
      isCompleted: false,
      isLocked: true
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Dersler 📚</h2>
        <p className="text-white/80">Yeni konular öğren ve becerilerini geliştir</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList variant="default" className="grid w-full grid-cols-3">
          <TabsTrigger variant="default" value="all">Tümü</TabsTrigger>
          <TabsTrigger variant="default" value="in-progress">Devam Eden</TabsTrigger>
          <TabsTrigger variant="default" value="completed">Tamamlanan</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {lessons.map((lesson) => (
            <Card key={lesson.id} variant={lesson.isLocked ? "subtle" : "default"} className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${lesson.isLocked ? 'bg-white/10' : 'bg-linear-to-br from-blue-400 to-purple-500'}`}>
                      {lesson.isLocked ? (
                        <Lock className="h-5 w-5 text-white/60" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-white" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-white">{lesson.title}</CardTitle>
                      <CardDescription className="text-white/70">{lesson.description}</CardDescription>
                    </div>
                  </div>
                  {lesson.isCompleted && (
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.duration}
                    </span>
                    <span>{lesson.difficulty}</span>
                  </div>
                  
                  {!lesson.isLocked && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-white/80">
                        <span>İlerleme</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-linear-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    variant={lesson.isCompleted ? "secondary" : "primary"} 
                    size="default-text" 
                    className="w-full"
                    disabled={lesson.isLocked}
                  >
                    {lesson.isCompleted ? 'Tekrar Et' : lesson.isLocked ? 'Kilitli' : 'Başla'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {lessons.filter(lesson => !lesson.isCompleted && !lesson.isLocked).map((lesson) => (
            <Card key={lesson.id} variant="default" className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">{lesson.title}</CardTitle>
                <CardDescription className="text-white/70">{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-white/80">
                    <span>İlerleme</span>
                    <span>{lesson.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-linear-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                  </div>
                  <Button variant="primary" size="default-text" className="w-full">
                    Devam Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {lessons.filter(lesson => lesson.isCompleted).map((lesson) => (
            <Card key={lesson.id} variant="elevated" className="hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white flex items-center">
                      {lesson.title}
                      <Star className="h-5 w-5 text-yellow-400 fill-current ml-2" />
                    </CardTitle>
                    <CardDescription className="text-white/70">{lesson.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="default-text" className="w-full">
                  Tekrar Et
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
