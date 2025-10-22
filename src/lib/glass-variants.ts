import { cva } from 'class-variance-authority'

// Glass Efekt Standartları
export const glassBlur = {
  sm: 'blur-2',
  md: 'blur-4',
  lg: 'blur-8',
  xl: 'blur-16',
  '2xl': 'blur-32',
} as const

export const glassSaturation = {
  normal: 'saturate-180',
  high: 'saturate-200',
} as const

export const glassBackgrounds = {
  panel: 'bg-gradient-to-br from-white/25 via-white/15 to-white/10',
  card: 'bg-gradient-to-br from-white/25 to-white/15',
  button: 'bg-gradient-to-br from-white/30 to-white/20',
  buttonSecondary: 'bg-gradient-to-br from-white/25 to-white/15',
  buttonPrimary: 'bg-gradient-to-br from-black/80 to-black/60',
  buttonActive: 'bg-gradient-to-br from-white/40 to-white/30',
  input: 'bg-gradient-to-br from-white/20 to-white/10',
  inner: 'bg-gradient-to-br from-white/10 to-white/5',
} as const

export const glassBorders = {
  normal: 'border-white/30',
  strong: 'border-white/40',
  light: 'border-white/20',
} as const

export const glassShadows = {
  sm: 'shadow-lg',
  md: 'shadow-xl',
  lg: 'shadow-2xl',
} as const

export const glassTransitions = 'transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)'

// Glass Button Variants
export const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive glass-interactive",
  {
    variants: {
      variant: {
        default: 'glass-button-default hover:scale-105 active:scale-95',
        primary: 'glass-button-primary hover:scale-105 active:scale-95',
        secondary: 'glass-button-secondary hover:scale-105 active:scale-95',
        destructive: 'glass-button-destructive hover:scale-105 active:scale-95',
        ghost: 'glass-button-ghost hover:scale-105 active:scale-95',
        link: 'text-white underline-offset-4 hover:underline hover:text-white/90',
      },
      size: {
        sm: 'min-h-6 min-w-6 rounded-full',
        default: 'min-h-8 min-w-8 rounded-full',
        lg: 'min-h-10 min-w-10 rounded-full',
        'sm-text': 'min-h-8 px-3 rounded-full text-xs',
        'default-text': 'min-h-9 px-4 rounded-full text-sm',
        'lg-text': 'min-h-10 px-6 rounded-full text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

// Glass Card Variants
export const glassCardVariants = cva(
  'flex flex-col rounded-2xl border shadow-sm transition-all duration-300 glass-interactive',
  {
    variants: {
      variant: {
        default: 'glass-card-default',
        elevated: 'glass-card-elevated',
        subtle: 'glass-card-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

// Glass Input Variants
export const glassInputVariants = cva(
  'w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base transition-all duration-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 glass-focus',
  {
    variants: {
      variant: {
        default: 'glass-input-default placeholder:text-white/60 focus:border-white/50 focus:shadow-lg',
        filled: 'glass-input-filled placeholder:text-white/70 focus:border-white/60 focus:shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

// Glass Tabs Variants
export const glassTabsVariants = cva(
  'inline-flex w-fit items-center justify-center rounded-lg p-[3px] transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'glass-tabs-default',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const glassTabsTriggerVariants = cva(
  "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'glass-tabs-trigger-default',
        glass: 'glass-tabs-trigger-default',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
