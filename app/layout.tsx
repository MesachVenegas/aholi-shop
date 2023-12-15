import type { Metadata } from 'next'
import { inter } from '@/components/ui/fonts'
import Navbar from '@/components/nabvar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'
import WhatsButton from '@/components/whatsbutton/WhatsButton'



export const metadata: Metadata = {
  title: 'Aholi | Home',
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
        <Navbar />
        {children}
        <WhatsButton />
        <Footer />
      </body>
    </html>
  )
}
