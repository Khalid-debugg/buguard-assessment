import './globals.css'
import type { Metadata } from 'next'
import { ReactNode, StrictMode } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})
export const metadata: Metadata = {
  title: 'The Blog',
  description: 'A Next.js App using Tailwind',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <StrictMode>
          <ThemeProvider>
            <Navbar />
            <main className="bg-background p-1 text-primary sm:p-4 md:px-[112px] md:py-[30px] dark:bg-background-dark dark:text-primary-dark">
              {children}
            </main>
          </ThemeProvider>
        </StrictMode>
      </body>
    </html>
  )
}
