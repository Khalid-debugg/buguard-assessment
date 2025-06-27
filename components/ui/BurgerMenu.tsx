interface BurgerMenuProps {
    toggleMenu: () => void
  }
const BurgerMenu = ({toggleMenu}: BurgerMenuProps) => {
  return (
    <button
    onClick={toggleMenu}
    className="p-2 bg-background dark:bg-background-dark rounded-md transition-colors sm:hidden"
    aria-label="Toggle menu"
    >
    <svg
      className="text-primary dark:text-primary-dark w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>  )
}

export default BurgerMenu