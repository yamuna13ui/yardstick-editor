import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YARDSTICK (Python)',
  description: 'An interactive python online code editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src={`https://cdn.jsdelivr.net/pyodide/dev/full/pyodide.js`} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html >
  )
}
