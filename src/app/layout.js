import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'
import NextAuthProvider from './NextAuthProvider'

const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'ContactHub',
  description: 'list your business now',
}

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <section className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1'>
              {children}
            </main>
            <Footer />
          </section>
        </body>
      </html>
    </NextAuthProvider>
  )
}
