import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Helio's Blog",
  description: 'Hey you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <h1>Helio's Blog</h1>
        <p>This is Helio's Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <p>Developed by Hélio</p>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
        
        </body>
    </html>
  )
}
