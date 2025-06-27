'use client'

import { useState } from 'react'
import MobileMenu from './MobileMenu'
import BurgerMenu from '../ui/BurgerMenu'
import Link from 'next/link'
import DarkModeToggle from './Switch'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="relative bg-background p-5 md:px-[112px] md:py-[30px] dark:bg-background-dark">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-primary dark:text-primary-dark">
          Khalid Sherif
        </h1>
        <BurgerMenu toggleMenu={toggleMenu} />
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/posts"
            className="cursor-pointer rounded-md p-2 text-primary transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-primary dark:text-primary-dark"
          >
            Blog
          </Link>
          <Link
            href="/posts"
            className="cursor-pointer rounded-md p-2 text-primary transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-primary dark:text-primary-dark"
          >
            Projects
          </Link>
          <Link
            href="/posts"
            className="cursor-pointer rounded-md p-2 text-primary transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-primary dark:text-primary-dark"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="cursor-pointer rounded-md p-2 text-primary transition-all duration-300 ease-in-out hover:bg-slate-100 hover:text-primary dark:text-primary-dark"
          >
            Newsletter
          </Link>
          <DarkModeToggle />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  )
}

export default Navbar
