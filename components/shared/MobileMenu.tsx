'use client'

import Link from 'next/link'
import DarkModeToggle from './Switch'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-background dark:bg-[#121212] transition-height duration-700 ease-in-out ${
        isOpen ? 'opacity-100 h-screen' : 'opacity-0 h-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col gap-4 items-center justify-center space-y-8 px-4">
          <p className='text-primary dark:text-primary-dark font-semibold'>Khalid Sherif</p>
          <Link
            href="/"
            className="text-primary dark:text-primary-dark"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-primary dark:text-primary-dark "
          >
            Projects
          </Link>
          <Link
            href="/"
            className="text-primary dark:text-primary-dark"
          >         
          
            About
            </Link>
          <Link
            href="/"
            className="text-primary dark:text-primary-dark"
          >           
            Newsletter
          </Link>
          <DarkModeToggle />
        </div>
        <div className="flex justify-center p-8">
        <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-primary dark:text-primary-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
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