import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { glassInputVariants } from "@/lib/glass-variants"
import { cn } from "@/lib/utils"

function Input({ 
  className, 
  type, 
  variant,
  ...props 
}: React.ComponentProps<"input"> & VariantProps<typeof glassInputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(glassInputVariants({ variant, className }))}
      {...props}
    />
  )
}

export { glassInputVariants, Input }

