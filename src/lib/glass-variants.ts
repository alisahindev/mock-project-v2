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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: `rounded-full backdrop-filter ${glassBlur.md} ${glassSaturation.normal} ${glassBackgrounds.button} border ${glassBorders.normal} ${glassShadows.md} text-white drop-shadow-sm hover:from-white/35 hover:to-white/25 hover:shadow-2xl hover:scale-105 active:scale-95`,
        primary: `px-4 rounded-full backdrop-filter ${glassBlur.md} ${glassSaturation.normal} ${glassBackgrounds.buttonPrimary} border ${glassBorders.light} ${glassShadows.md} text-white drop-shadow-sm hover:from-black/90 hover:to-black/70 hover:shadow-xl hover:scale-105 active:scale-95`,
        secondary: `px-4 rounded-full backdrop-filter ${glassBlur.md} ${glassSaturation.normal} ${glassBackgrounds.buttonSecondary} border ${glassBorders.normal} ${glassShadows.md} text-white/90 drop-shadow-sm hover:from-white/35 hover:to-white/25 hover:text-white hover:shadow-xl hover:scale-105 active:scale-95`,
        destructive: `px-4 rounded-full backdrop-filter ${glassBlur.md} ${glassSaturation.normal} bg-gradient-to-br from-red-500/30 to-red-500/20 border border-red-400/40 ${glassShadows.md} text-white drop-shadow-sm hover:from-red-500/40 hover:to-red-500/30 hover:shadow-xl hover:scale-105 active:scale-95`,
        ghost: `px-4 rounded-full backdrop-filter ${glassBlur.md} ${glassSaturation.normal} ${glassBackgrounds.buttonSecondary} border ${glassBorders.light} ${glassShadows.sm} text-white/80 drop-shadow-sm hover:from-white/35 hover:to-white/25 hover:text-white hover:shadow-lg hover:scale-105 active:scale-95`,
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
export const glassCardVariants = cva('flex flex-col rounded-2xl border shadow-sm transition-all duration-300', {
  variants: {
    variant: {
      default: `backdrop-filter ${glassBlur.xl} ${glassSaturation.normal} ${glassBackgrounds.panel} border ${glassBorders.normal} ${glassShadows.md} text-white`,
      elevated: `backdrop-filter ${glassBlur['2xl']} ${glassSaturation.high} ${glassBackgrounds.panel} border ${glassBorders.strong} ${glassShadows.lg} text-white shadow-2xl`,
      subtle: `backdrop-filter ${glassBlur.lg} ${glassSaturation.normal} ${glassBackgrounds.card} border ${glassBorders.light} ${glassShadows.sm} text-white/90`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// Glass Input Variants
export const glassInputVariants = cva(
  'w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base transition-all duration-300 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: `backdrop-filter ${glassBlur.md} ${glassSaturation.normal} ${glassBackgrounds.input} border ${glassBorders.normal} text-white/90 placeholder:text-white/60 focus:border-white/50 focus:shadow-lg`,
        filled: `backdrop-filter ${glassBlur.lg} ${glassSaturation.high} ${glassBackgrounds.buttonSecondary} border ${glassBorders.strong} text-white placeholder:text-white/70 focus:border-white/60 focus:shadow-xl`,
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
        default: `backdrop-filter ${glassBlur.lg} ${glassSaturation.normal} ${glassBackgrounds.panel} border ${glassBorders.normal} ${glassShadows.sm} text-white/80`,
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
        default: `text-white/80 hover:text-white hover:backdrop-filter hover:blur-4 hover:bg-white/10 data-[state=active]:backdrop-filter data-[state=active]:blur-4 data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-sm`,
        glass: `text-white/80 hover:text-white hover:backdrop-filter hover:blur-4 hover:bg-white/10 data-[state=active]:backdrop-filter data-[state=active]:blur-4 data-[state=active]:bg-white/30 data-[state=active]:text-white data-[state=active]:shadow-lg`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
