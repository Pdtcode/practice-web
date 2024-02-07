import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TKΩ Alumni Association',
  description: 'The TKΩ Alumni Association is a separate organizational body that is comprised of all registered members that are no longer active in a chapter of Tau Kappa Omega Fraternity. Its purpose is to contribute to the growing network of TKΩ Alumni and TKΩ Chapters through any financial and administrative activities.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
