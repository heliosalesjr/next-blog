import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from '../../node_modules/next/link'

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
        <Link href={"/"}>
         <h1>Hélio's Blog</h1>
        </Link>
        
        <p>This is Hélio's Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <p>Developed by Hélio Sales Jr. 👨🏾‍💻</p>
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
