"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  
  // Determine active tab based on current URL hash
  const getActiveTab = () => {
    if (typeof window === 'undefined') return items[0].name
    const hash = window.location.hash || items[0].url
    const activeItem = items.find(item => item.url === hash)
    return activeItem ? activeItem.name : items[0].name
  }

  const [activeTab, setActiveTab] = useState(getActiveTab)

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getActiveTab())
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("hashchange", handleHashChange)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed sm:relative bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 z-80 sm:translate-y-0",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-[#0d1534]/70  backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-gray-300 hover:text-yellow-400",
                isActive && "bg-[#000622] text-yellow-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-yellow-400/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-yellow-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-yellow-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-yellow-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}