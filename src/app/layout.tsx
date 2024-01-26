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
      <div className='text-center md:text-left p-8 my-6 md:flex'>
        <Link href={"/"}>
         <h1 className='text-4xl md:text-6xl text-slate-800 font-semibold'>Hélio com H</h1>
        </Link>
        
        <p className='text-slate-700 md:text-xl md:pl-8 md:m-4'>My tagline comes here</p>
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
