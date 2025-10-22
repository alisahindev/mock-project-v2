import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { BookOpen, Calendar, Clock, Play, Target, TrendingUp } from 'lucide-react'
import type * as React from 'react'

// Assignment Card Variants
const assignmentCardVariants = cva(
  'relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group',
  {
    variants: {
      variant: {
        ongoing: 'glass-assignment-card-ongoing',
        active: 'glass-assignment-card',
      },
      size: {
        default: 'min-h-[200px] sm:min-h-[220px]',
        large: 'min-h-[240px] sm:min-h-[260px]',
      },
    },
    defaultVariants: {
      variant: 'active',
      size: 'default',
    },
  },
)

// Progress Ring Component
interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
}

function ProgressRing({ progress, size = 40, strokeWidth = 3, className }: ProgressRingProps) {
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
          className="transition-all duration-500 ease-out"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

// Badge Component
interface BadgeProps {
  children: React.ReactNode
  variant?: 'category' | 'status' | 'deadline'
  className?: string
}

function Badge({ children, variant = 'category', className }: BadgeProps) {
  const variantStyles = {
    category: 'glass-badge-category',
    status: 'glass-badge-status',
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

// Assignment Card Props
export interface AssignmentCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof assignmentCardVariants> {
  title: string
  learningObjective: string
  category: string
  deadline: string
  backgroundImage?: string
  progress?: number
  isOngoing?: boolean
  socialProof?: string
  onCardClick?: () => void
}

export function AssignmentCard({
  title,
  learningObjective,
  category,
  deadline,
  backgroundImage,
  progress,
  isOngoing = false,
  socialProof,
  onCardClick,
  variant,
  size,
  className,
  ...props
}: AssignmentCardProps) {
  const cardVariant = isOngoing ? 'ongoing' : variant

  return (
    <div
      className={cn(assignmentCardVariants({ variant: cardVariant, size }), className)}
      onClick={onCardClick}
      {...props}
    >
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6">
        {/* Header with Status Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            {isOngoing && (
              <Badge variant="status" className="mb-3 animate-pulse">
                <Clock className="h-3 w-3" />
                Devam Ediyor
              </Badge>
            )}
            <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-2 line-clamp-2">{title}</h3>
          </div>
          {isOngoing && progress !== undefined && (
            <div className="ml-3 shrink-0 flex flex-col items-center">
              <ProgressRing progress={progress} size={48} strokeWidth={4} className="text-white glass-progress-ring" />
              <span className="text-white/80 text-xs font-medium mt-1">{progress}%</span>
            </div>
          )}
        </div>

        {/* Learning Objective */}
        <div className="flex items-start gap-2 mb-4">
          <Target className="h-4 w-4 text-white/80 shrink-0 mt-0.5" />
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{learningObjective}</p>
        </div>

        {/* Category and Deadline */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <Badge variant="category" className="shrink-0">
            <BookOpen className="h-3 w-3" />
            {category}
          </Badge>
          <Badge variant="deadline" className="shrink-0">
            <Calendar className="h-3 w-3" />
            {deadline}
          </Badge>
        </div>

        {/* Social Proof (only for ongoing cards) */}
        {isOngoing && socialProof && (
          <div className="mt-auto">
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm glass-social-proof px-3 py-2 rounded-lg border border-white/20">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="font-medium">{socialProof}</span>
            </div>
          </div>
        )}

        {/* Play Button for Active Cards */}
        {!isOngoing && (
          <div className="mt-auto flex justify-end">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 group-hover:scale-105 shadow-lg">
              <Play className="h-4 w-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-semibold">Başla</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Empty State Component
interface EmptyStateProps {
  title?: string
  description?: string
  illustration?: React.ReactNode
  className?: string
}

export function AssignmentEmptyState({
  title = 'Henüz yeni atama yok',
  description = 'Yakında tekrar kontrol et!',
  illustration,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-6 text-center', className)}>
      {illustration || (
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 sm:mb-6">
          <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white/60" />
        </div>
      )}
      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{title}</h3>
      <p className="text-white/70 text-xs sm:text-sm max-w-sm">{description}</p>
    </div>
  )
}

// Assignment List Component
interface AssignmentListProps {
  assignments: AssignmentCardProps[]
  emptyState?: React.ReactNode
  className?: string
}

export function AssignmentList({ assignments, emptyState, className }: AssignmentListProps) {
  if (assignments.length === 0) {
    return <div className={className}>{emptyState || <AssignmentEmptyState />}</div>
  }

  return (
    <div className={cn('space-y-3 sm:space-y-4', className)}>
      {assignments.map((assignment, index) => (
        <AssignmentCard key={index} {...assignment} />
      ))}
    </div>
  )
}
