import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#090D1F',
        },
        text: {
          primary: {
            light: '#1A1A1A',
            dark: '#FFFFFF',
          },
          secondary: {
            light: '#667085',
            dark: '#C0C5D0',
          },
          title: {
            light: '#6941C6',
            dark: '#6941C6',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
