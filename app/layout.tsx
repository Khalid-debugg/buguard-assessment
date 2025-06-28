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
  title: {
    default: 'The Blog',
    template: '%s | The Blog',
  },
  description: 'Explore insights, stories, and updates from The Blog — built with Next.js and Tailwind CSS.',
  keywords: ['blog', 'Next.js', 'Tailwind CSS', 'web development', 'articles'],
  metadataBase: new URL('https://buguard-assessment-d2zb2hxhf-khalids-projects-359b9524.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://buguard-assessment-d2zb2hxhf-khalids-projects-359b9524.vercel.app',
  },
  openGraph: {
    title: 'The Blog',
    description: 'Explore insights, stories, and updates from The Blog.',
    url: 'https://buguard-assessment-d2zb2hxhf-khalids-projects-359b9524.vercel.app',
    siteName: 'The Blog',
    images: [
      {
        url: '/b-letter.jpg', 
        width: 1200,
        height: 630,
        alt: 'The Blog Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Blog',
    description: 'Explore insights, stories, and updates from The Blog.',
    images: ['/b-letter.jpg'],
  },
  authors: [{ name: 'Khalid Sherif', url: 'https://buguard-assessment-d2zb2hxhf-khalids-projects-359b9524.vercel.app' }],
  creator: 'Khalid Sherif',
};


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
