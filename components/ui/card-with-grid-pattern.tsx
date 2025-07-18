import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

interface GridPatternCardProps {
  children: React.ReactNode
  className?: string
  patternClassName?: string
  gradientClassName?: string
}

export function GridPatternCard({
  children,
  className,
  patternClassName,
  gradientClassName,
}: GridPatternCardProps) {
  return (
    <motion.div
      className={cn(
        'border w-full rounded-md overflow-hidden',
        'bg-[#020820] dark:bg-zinc-950',
        'border-zinc-200 dark:border-zinc-900',
        className,
      )}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div
        className={cn(
          'size-full bg-repeat bg-[length:50px_50px]',
          'bg-square-pattern-light dark:bg-square-pattern',
          patternClassName,
        )}
      >
        <div
          className={cn(
            'size-full bg-gradient-to-tr',
            'from-[#020820] via-[#020820]/[0.85] to-[#020820]',
            'dark:from-zinc-950 dark:via-zinc-950/[.85] dark:to-zinc-950',
            gradientClassName,
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  )
}

export function GridPatternCardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-left p-4 md:p-6', className)} {...props} />
} 