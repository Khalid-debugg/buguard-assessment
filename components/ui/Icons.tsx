export const Sun = () => (
  <svg
    className="translate-x-2 text-primary-dark"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)

export const Moon = () => (
  <svg
    className="translate-x-16 text-primary"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

export const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={
      'h-3 w-3 text-primary hover:cursor-pointer dark:text-primary-dark' +
      (props.className || '')
    }
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 11L11 1M11 1H1M11 1V11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
