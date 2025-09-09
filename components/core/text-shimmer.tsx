"use client";
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TextShimmerProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function TextShimmer({ children, className, duration = 2 }: TextShimmerProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer",
        "font-poppins font-light text-white",
        "relative pl-3",
        className
      )}
      style={{
        animationDuration: `${duration}s`,
        fontFamily: 'var(--font-poppins)',
      }}
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-green-400 rounded-full shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
      {children}
    </span>
  );
}
