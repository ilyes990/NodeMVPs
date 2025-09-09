"use client";
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
}

export function LiquidGlass({ children, className }: LiquidGlassProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl inline-block",
        "bg-white/10 backdrop-blur-md",
        "border border-white/20",
        "shadow-lg shadow-black/20",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:animate-shimmer",
        className
      )}
    >
      <div className="relative z-10 px-4 py-2">
        {children}
      </div>
    </div>
  );
}
