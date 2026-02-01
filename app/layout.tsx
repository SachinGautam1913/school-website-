import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Kirnajay Vidya Mandir - Excellence in Education',
  description: 'Kirnajay Vidya Mandir is a premier educational institution committed to nurturing young minds with quality education, strong values, and holistic development.',
  keywords: 'school, education, Kirnajay Vidya Mandir, admission, academics, CBSE, Indian school',
  authors: [{ name: 'Kirnajay Vidya Mandir' }],
  openGraph: {
    title: 'Kirnajay Vidya Mandir - Excellence in Education',
    description: 'A premier educational institution committed to nurturing young minds with quality education and strong values.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#c75c0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
