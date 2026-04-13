import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'



export const metadata: Metadata = {
  title: 'Aurex Group - Bau, Sanierung & Facility Services',
  description: 'Effiziente und strukturierte Steuerung von Bau-, Sanierungs- und Facility-Projekten. Ein Ansprechpartner. Ein Prozess. Ein Ergebnis.'

}

import FloatingContact from '@/components/floating-contact'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background relative">
      <body className="font-sans antialiased text-foreground">
        {children}
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
