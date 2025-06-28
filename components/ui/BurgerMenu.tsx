import { BurgerMenuProps } from '@/types'

const BurgerMenu = ({ toggleMenu }: BurgerMenuProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="rounded-md bg-background p-2 transition-colors sm:hidden dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle navigation menu"
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}

export default BurgerMenu
