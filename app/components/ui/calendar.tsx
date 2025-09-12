import * as React from "react"
import { cn } from "@/lib/utils"

function Calendar({
  className,
  value,
  onChange,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type="date"
      className={cn(
        "px-3 py-2 rounded-md border border-input bg-background text-sm",
        className
      )}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export { Calendar }
