'use client'

import { useState } from 'react'
import { Moon, Sun } from '@/components/ui/Icons'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-24 items-center justify-between rounded-full bg-primary transition-colors duration-300 dark:bg-primary-dark"
    >
      <div className={`h-6 w-6`}>{isDark ? <Moon /> : <Sun />}</div>
      <div
        className={`h-6 w-6 transform rounded-full transition-all duration-300 ${isDark ? '-translate-x-16' : '-translate-x-2'} bg-background dark:bg-background-dark`}
      />
    </button>
  )
}
