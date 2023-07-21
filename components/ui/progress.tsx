"use client";
import {cn} from "@/lib/utils";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ 
		className, value, ...props 
	}, ref) => (
  <ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}>
    <ProgressPrimitive.Indicator style={{transform: `translateX(-${100 - (value || 0)}%)`}}/>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;
export {Progress};