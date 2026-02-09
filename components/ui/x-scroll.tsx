"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { ScrollArea, ScrollBar } from "./scroll-area"

interface XScrollProps {
  children: React.ReactNode
  className?: string
}

export default function XScroll({ children, className }: XScrollProps) {
  return (
    <div className="flex">
      <ScrollArea className={cn("w-1 flex-1", className)}>
        {children}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
