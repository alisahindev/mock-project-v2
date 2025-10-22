import clsx from 'clsx'
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  FileText,
  Play,
  Target,
  TrendingUp,
  User,
  Video,
} from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle, GlassCard } from '../components/ui/card'
import { getAllAssignments, getAssignmentById } from '../lib/mock-data'
import { cn } from '../lib/utils'

// Progress Ring Component
interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
}

function ProgressRing({ progress, size = 60, strokeWidth = 4, className }: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className={cn('relative', className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out text-white"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{progress}%</span>
      </div>
    </div>
  )
}

// Badge Component
interface BadgeProps {
  children: React.ReactNode
  variant?: 'category' | 'status' | 'difficulty' | 'deadline'
  className?: string
}

function Badge({ children, variant = 'category', className }: BadgeProps) {
  const variantStyles = {
    category: 'glass-badge-category',
    status: 'glass-badge-status',
    difficulty: 'glass-badge-difficulty',
    deadline: 'glass-badge-deadline',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm shadow-sm transition-all duration-200 hover:scale-105',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

// Resource Item Component
interface ResourceItemProps {
  resource: {
    name: string
    type: 'pdf' | 'video' | 'link' | 'audio'
    url: string
  }
}

function ResourceItem({ resource }: ResourceItemProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'pdf':
        return <FileText className="h-4 w-4" />
      case 'video':
        return <Video className="h-4 w-4" />
      case 'audio':
        return <Download className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  return (
    <div className="flex items-center justify-between p-3 rounded-lg glass border border-white/10 hover:border-white/20 transition-all duration-200">
      <div className="flex items-center gap-3">
        {getIcon()}
        <span className="text-white font-medium text-sm">{resource.name}</span>
      </div>
      <Button variant="glass-primary" size="sm" className="text-white">
        <ExternalLink className="h-3 w-3" />
      </Button>
    </div>
  )
}

// Error State Component
function AssignmentNotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center mb-6">
        <BookOpen className="h-10 w-10 text-white/60" />
      </div>
      <h2 className="text-white font-semibold text-xl mb-2">Atama Bulunamadı</h2>
      <p className="text-white/70 text-sm mb-6 max-w-sm">
        Aradığınız atama mevcut değil veya erişim izniniz bulunmuyor.
      </p>
      <Button variant="glass-primary" onClick={() => navigate('/')} className="text-white">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Ana Sayfaya Dön
      </Button>
    </div>
  )
}

export function AssignmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const assignment = id ? getAssignmentById(id) : undefined
  const allAssignments = getAllAssignments()
  const currentIndex = assignment ? allAssignments.findIndex(a => a.id === assignment.id) : -1

  // Background image yönetimi
  useEffect(() => {
    if (!assignment) return

    // Mevcut background'ı sakla
    const originalBackground = document.body.style.backgroundImage
    const originalBackgroundSize = document.body.style.backgroundSize
    const originalBackgroundPosition = document.body.style.backgroundPosition
    const originalBackgroundRepeat = document.body.style.backgroundRepeat
    const originalBackgroundAttachment = document.body.style.backgroundAttachment

    // Yeni background'ı ayarla
    document.body.style.backgroundImage = `url(${assignment.backgroundImage})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    // Cleanup function - sayfa çıkarken eski background'a dön
    return () => {
      document.body.style.backgroundImage = originalBackground
      document.body.style.backgroundSize = originalBackgroundSize
      document.body.style.backgroundPosition = originalBackgroundPosition
      document.body.style.backgroundRepeat = originalBackgroundRepeat
      document.body.style.backgroundAttachment = originalBackgroundAttachment
    }
  }, [assignment])

  if (!assignment) {
    return <AssignmentNotFound />
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'not_started':
        return 'Başlanmadı'
      case 'in_progress':
        return 'Devam Ediyor'
      case 'completed':
        return 'Tamamlandı'
      default:
        return 'Bilinmiyor'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay':
        return 'text-green-400'
      case 'Orta':
        return 'text-yellow-400'
      case 'Zor':
        return 'text-red-400'
      default:
        return 'text-white'
    }
  }

  const getNextAssignment = () => {
    if (currentIndex < allAssignments.length - 1) {
      return allAssignments[currentIndex + 1]
    }
    return null
  }

  const getPreviousAssignment = () => {
    if (currentIndex > 0) {
      return allAssignments[currentIndex - 1]
    }
    return null
  }

  const nextAssignment = getNextAssignment()
  const previousAssignment = getPreviousAssignment()

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <GlassCard className={clsx('relative flex items-center mb-4')}>
        <CardContent className="space-y-4">
          <CardTitle className="text-white text-2xl font-bold">{assignment.title}</CardTitle>
        </CardContent>
      </GlassCard>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Status Card */}
        {assignment.status !== 'not_started' && (
          <GlassCard className="border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                İlerleme Durumu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-white font-bold text-2xl">{assignment.completionPercentage || 0}%</div>
                  <div className="text-white/70 text-sm">Tamamlanma</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-2xl">{assignment.timeSpent || '0 dk'}</div>
                  <div className="text-white/70 text-sm">Harcanan Süre</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-2xl">{assignment.lastAccessed || 'Hiç'}</div>
                  <div className="text-white/70 text-sm">Son Erişim</div>
                </div>
              </div>
            </CardContent>
          </GlassCard>
        )}

        {/* Assignment Information */}
        <GlassCard className="border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Atama Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Açıklama</h4>
              <p className="text-white/80 text-sm leading-relaxed">{assignment.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Süre</h4>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/60" />
                  <span className="text-white/80 text-sm">{assignment.duration}</span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Zorluk</h4>
                <Badge variant="difficulty" className={getDifficultyColor(assignment.difficulty)}>
                  {assignment.difficulty}
                </Badge>
              </div>
            </div>

            {assignment.prerequisites.length > 0 && (
              <div>
                <h4 className="text-white font-semibold mb-2">Ön Koşullar</h4>
                <div className="flex flex-wrap gap-2">
                  {assignment.prerequisites.map((prereq, index) => (
                    <Badge key={index} variant="category" className="text-xs">
                      {prereq}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </GlassCard>

        {/* Assignment Content */}
        <GlassCard className="border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Atama İçeriği</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Senaryo</h4>
              <p className="text-white/80 text-sm leading-relaxed">{assignment.content}</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Adımlar</h4>
              <ol className="space-y-2">
                {assignment.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/60 text-sm font-bold mt-0.5">{index + 1}.</span>
                    <span className="text-white/80 text-sm leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </GlassCard>

        {/* Resources */}
        {assignment.resources.length > 0 && (
          <GlassCard className="border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Kaynaklar</CardTitle>
              <CardDescription className="text-white/70">Bu atama için hazırlanan ek materyaller</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assignment.resources.map((resource, index) => (
                  <ResourceItem key={index} resource={resource} />
                ))}
              </div>
            </CardContent>
          </GlassCard>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="glass-primary" className="flex-1 text-white">
            <Play className="h-5 w-5 mr-2" />
            {assignment.status === 'not_started' ? 'Başla' : 'Devam Et'}
          </Button>
          {assignment.status === 'in_progress' && (
            <Button variant="glass" className="text-white border-white/20 hover:border-white/40">
              <Target className="h-5 w-5 mr-2" />
              Kaydet
            </Button>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4">
          {previousAssignment && (
            <Button
              variant="glass"
              onClick={() => navigate(`/assignment/${previousAssignment.id}`)}
              className="flex-1 text-white border-white/20 hover:border-white/40"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Önceki: {previousAssignment.title}
            </Button>
          )}
          {nextAssignment && (
            <Button
              variant="glass"
              onClick={() => navigate(`/assignment/${nextAssignment.id}`)}
              className="flex-1 text-white border-white/20 hover:border-white/40"
            >
              Sonraki: {nextAssignment.title}
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Button>
          )}
        </div>

        {/* Additional Information */}
        <GlassCard className="border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Ek Bilgiler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Oluşturan</span>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-white/60" />
                <span className="text-white text-sm">{assignment.creator}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Son Güncelleme</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-white/60" />
                <span className="text-white text-sm">{assignment.updateDate}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Versiyon</span>
              <span className="text-white text-sm">{assignment.version}</span>
            </div>
            {assignment.tags.length > 0 && (
              <div>
                <span className="text-white/70 text-sm block mb-2">Etiketler</span>
                <div className="flex flex-wrap gap-2">
                  {assignment.tags.map((tag, index) => (
                    <Badge key={index} variant="category" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </GlassCard>
      </div>
    </div>
  )
}
