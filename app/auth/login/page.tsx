import Image from "next/image";
import { Metadata } from "next";
import LoginForm from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: 'Aholi | Iniciar Sesión',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones'],
}

export default function LoginPage() {

  return (
    <main className="flex w-full h-full justify-center items-center py-16">
      <div className="hidden lg:flex justify-center items-center flex-col bg-contact-img w-full max-w-xl h-full overflow-hidden rounded-lg p-10 relative">
        <div className="backdrop-blur-sm bg-black/20 absolute w-full h-full top-0 left-0" />
          <Image
            src='/assets/logo_aholi.png'
            width={350}
            height={600}
            alt="Aholi Logo"
            className="drop-shadow-2xl "
          />
      </div>
      <LoginForm />
    </main>
  )
}
