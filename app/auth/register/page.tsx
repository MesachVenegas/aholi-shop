import Image from "next/image";
import { Metadata } from "next";
import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: 'Aholi | Registrarse',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones'],
}


export default function RegisterPage() {

  return (
    <main className="flex w-full justify-center items-center p-4 py-12 xl:p-16">
      <div className="hidden xl:flex  relative flex-col w-full h-full bg-white  max-w-xl justify-center items-center overflow-hidden">
        <Image
          src='/assets/bg_contact.jpeg'
          className="absolute z-0"
          fill={true}
          alt="bg_login"
          style={{ objectFit: 'cover'}}
        />
        <div className="flex justify-center items-center w-full h-full backdrop-blur-sm z-20">
          <Image
            src='/assets/logo_aholi.png'
            width={350}
            height={600}
            alt="Aholi Logo"
            className="drop-shadow-2xl "
          />
        </div>
      </div>
      <RegisterForm />
    </main>
  )
}
