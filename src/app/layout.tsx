import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/chat/ChatBot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'JUSTIN Retirement Partners | Guaranteed Income. Confident Retirement.',
  description: 'Expert annuity and retirement planning services. We help pre-retirees and retirees secure guaranteed income for a confident retirement. Schedule your free consultation today.',
  keywords: 'annuity, retirement planning, fixed annuity, indexed annuity, retirement income, financial planning',
  openGraph: {
    title: 'JUSTIN Retirement Partners | Guaranteed Income. Confident Retirement.',
    description: 'Expert annuity and retirement planning services for a secure retirement.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
