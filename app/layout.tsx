import type { Metadata } from 'next'
import { DM_Sans, Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Court & Craft Tennis | Find Your Own Game',
  description: 'Precision tennis coaching for unconventional learners. Private lessons, ball machine training, and inner game coaching near Irvine Spectrum Center, CA.',
  keywords: ['tennis', 'coaching', 'Irvine', 'private lessons', 'tennis instructor', 'beginner tennis'],
  openGraph: {
    title: 'Court & Craft Tennis | Find Your Own Game',
    description: 'Precision tennis coaching for unconventional learners.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}