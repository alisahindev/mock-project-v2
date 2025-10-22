import * as TabsPrimitive from "@radix-ui/react-tabs"
import { type VariantProps } from "class-variance-authority"
import * as React from "react"

import { glassTabsTriggerVariants, glassTabsVariants } from "@/lib/glass-variants"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof glassTabsVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(glassTabsVariants({ variant, className }))}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof glassTabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(glassTabsTriggerVariants({ variant, className }))}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { glassTabsTriggerVariants, glassTabsVariants, Tabs, TabsContent, TabsList, TabsTrigger }

