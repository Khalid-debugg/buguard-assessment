'use client'

import { Moon, Sun } from '@/components/ui/Icons'
import { useThemeContext } from '@/context/ThemeContext'

export default function DarkModeToggle() {
  const { theme, toggleTheme, mounted } = useThemeContext()
  const isDark = theme === 'dark'
  if (!mounted) {
    return (
      <button 
        className="relative flex h-10 w-24 items-center justify-between rounded-full bg-primary transition-colors duration-300 dark:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle dark mode"
      >
        <div className="h-6 w-6">
          <Sun />
        </div>
        <div className="h-6 w-6 -translate-x-2 transform rounded-full bg-background transition-all duration-300 dark:bg-background-dark" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-24 items-center justify-between rounded-full bg-primary transition-colors duration-300 dark:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`h-6 w-6`}>{isDark ? <Moon /> : <Sun />}</div>
      <div
        className={`h-6 w-6 transform rounded-full transition-all duration-300 ${isDark ? '-translate-x-16' : '-translate-x-2'} bg-background dark:bg-background-dark`}
      />
    </button>
  )
}
