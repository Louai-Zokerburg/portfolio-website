import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

import Sidebar from '@/components/sidebar'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Louai Boumediene',
  description: 'My Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${nunito.className} bg-bg-color-light dark:bg-bg-color-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <Sidebar />
          <main className='main'>

            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  )
}
