import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { socialMedia } from '@/data'
import Link from 'next/link'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { ThemeProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aryan Portfolio',
  description: 'thanks for visiting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
