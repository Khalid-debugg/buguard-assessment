import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        'background-dark': '#090D1F',

        primary: '#1A1A1A',
        'primary-dark': '#FFFFFF',

        secondary: '#667085',
        'secondary-dark': '#C0C5D0',

        title: '#6941C6',
      },
      screens: {
        'sm': '390px',
        'md': '819px',
        'lg': '834px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
