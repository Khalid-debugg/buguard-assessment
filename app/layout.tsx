import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'], 
})
export const metadata: Metadata = {
  title: 'My App',
  description: 'A Next.js App using Tailwind',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="text-black font-sans">
        {children}
      </body>
    </html>
  )
}