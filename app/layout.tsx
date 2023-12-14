import type { Metadata } from 'next'
import { inter } from '@/components/ui/fonts'
import './globals.css'
import Navbar from '@/components/Navbar'



export const metadata: Metadata = {
  title: 'Aholi | Home',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-lila-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
