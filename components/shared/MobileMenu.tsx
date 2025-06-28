'use client'

import Link from 'next/link'
import DarkModeToggle from './Switch'
import { MobileMenuProps } from '@/types'

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`transition-height fixed inset-0 z-50 bg-background duration-700 ease-in-out dark:bg-[#121212] ${
        isOpen ? 'h-screen opacity-100' : 'pointer-events-none h-0 opacity-0'
      }`}
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 space-y-8 px-4">
          <p className="font-semibold text-primary dark:text-primary-dark">
            Khalid Sherif
          </p>
          <Link href="/" className="text-primary dark:text-primary-dark">
            Blog
          </Link>
          <Link href="/" className="text-primary dark:text-primary-dark">
            Projects
          </Link>
          <Link href="/" className="text-primary dark:text-primary-dark">
            About
          </Link>
          <Link href="/" className="text-primary dark:text-primary-dark">
            Newsletter
          </Link>
          <DarkModeToggle />
        </div>
        <div className="flex justify-center p-8">
          <button
            onClick={onClose}
            className="rounded-md p-2 transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close mobile menu"
          >
            <svg
              className="h-6 w-6 text-primary dark:text-primary-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
