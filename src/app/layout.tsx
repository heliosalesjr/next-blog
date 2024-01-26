import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Link from '../../node_modules/next/link'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"]
});

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
<<<<<<< HEAD
      <div className='text-center md:text-left p-8 my-6 md:flex'>
=======
      <div className='bg-gradient-to-r from-blue-700 via-sky-900 to-purple-900 text-center p-8 my-6 rounded-lg'>
>>>>>>> 5d465efb17bc6ffd9c1c3f9ca3eea1d25f4729e9
        <Link href={"/"}>
         <h1 className='text-4xl md:text-6xl text-slate-800 font-semibold'>Hélio com H</h1>
        </Link>
        
<<<<<<< HEAD
        <p className='text-slate-700 md:text-xl md:pl-8 md:m-4'>My tagline comes here</p>
=======
        <p className='text-slate-200'>This is Hélio's Blog</p>
>>>>>>> 5d465efb17bc6ffd9c1c3f9ca3eea1d25f4729e9
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className='border-t border-fuchsia-450 text-center mt-6 py-6 text-slate-700'>
        <p className='text-lg text-slate-700'> 
        Developed by Hélio Sales Jr.</p>
        <p className='text-5xl'>👨🏾‍💻</p>
      </div>
    </footer>
  );
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <div className='mx-auto max-w-5xl'>
          {header}
          {children}
          {footer}
        </div>
        
        
        </body>
    </html>
  )
}
