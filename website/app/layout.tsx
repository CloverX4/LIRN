import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'LIRN Group — Process Engineering & Industrial Fabrication',
    template: '%s | LIRN Group',
  },
  description: 'Family-founded process engineering and industrial fabrication firm based in Hyderabad.',
  metadataBase: new URL('https://lirn.co.in'),
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}