import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { glassButtonVariants } from "@/lib/glass-variants"
import { cn } from "@/lib/utils"

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof glassButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(glassButtonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, glassButtonVariants }
