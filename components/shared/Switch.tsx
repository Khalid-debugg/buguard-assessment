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
      className="relative w-14 h-6 rounded-full bg-primary dark:bg-primary-dark transition-colors duration-300 flex justify-between items-center px-1"
    >
      <div className={`w-5 h-5`}>
          {isDark ? <Moon  /> : <Sun  />}
      </div>
      <div
        className={`w-4 h-4 rounded-full transition-all duration-300 transform
          ${isDark ? '-translate-x-7' : '-translate-x-1'}
          bg-background dark:bg-background-dark
        `}
      />
    </button>
  )
}
