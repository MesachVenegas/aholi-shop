import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AuthProvider from '@/components/AuthProvider';
import { inter } from '@/styles/fonts';

import '@/styles/globals.css'



export const metadata: Metadata = {
  title: 'Aholi Decoraciones',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="es">
      <body className={`${inter.className} bg-lila-100 text-slate-900`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <GoogleAnalytics />
        </AuthProvider>
      </body>
    </html>
  )
}
