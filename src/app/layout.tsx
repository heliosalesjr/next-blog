import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from '../../node_modules/next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hélio com H",
  description: "Hélio's blog",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className='bg-gradient-to-r from-fuchsia-700 via-fuchsia-950 to-purple-900 text-center p-8 my-6 rounded-lg'>
        <Link href={"/"}>
         <h1 className='text-3xl text-white font-bold'>Hélio com H</h1>
        </Link>
        
        <p className='text-slate-300'>This is Hélio's Blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className='border-t border-fuchsia-450 text-center mt-6 py-6 text-fuchsia-350'>
        <p className='text-lg text-white'> 
        Developed by Hélio Sales Jr.</p>
        <p className='text-5xl'>👨🏾‍💻</p>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-auto max-w-2xl'>
          {header}
          {children}
          {footer}
        </div>
        
        
        </body>
    </html>
  )
}
