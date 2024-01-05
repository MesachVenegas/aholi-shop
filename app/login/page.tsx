import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { recursive } from "@/components/ui/fonts";
import { socialLinks } from "@/libs/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata: Metadata = {
  title: 'Aholi | Iniciar Sesión',
  description: 'Aholi Decoraciones para toda ocasion, recuerdos para todo tipo de eventos, XV años, Bodas, etc',
  keywords: ['arreglos', 'decoracion', 'centros de mesa', 'xv años', 'decoraciones', 'bodas', 'graduaciones'],
}

export default function LoginPage() {

  return (
    <main className="flex w-full justify-center items-center h-[80vh] p-4 py-12 xl:p-16">
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
      <div className="flex flex-col w-full h-full max-w-2xl bg-white justify-center items-center gap-8 p-6 xl:-ml-12  rounded-[40px] z-20 shadow-2xl">
        <h2 className={`${recursive.className} text-2xl font-bold tracking-widest`}>Iniciar Sesión</h2>
        <button className="flex gap-2 w-full max-w-sm text-sm md:text-base h-12 items-center justify-center rounded-lg border border-slate-400 shadow-lg hover:bg-slate-100">
          Iniciar sesion con Google
          <Image src='/assets/google.svg' width={30} height={30} alt="google_logo" />
        </button>
        <div className="flex gap-4 w-full justify-center items-center text-slate-500">
          <hr className="flex w-[80px]" />
          <span>O</span>
          <hr className="flex w-[80px]" />
        </div>
        <form className="flex flex-col w-full max-w-md gap-3 ">
          <input
            type="email"
            id="email"
            title="email"
            placeholder="example@example.com"
            className="p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500"
          />
          <input
            type="password"
            id="password"
            title="password"
            placeholder="********"
            className="p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500"
          />
          <button className=" w-full h-12 bg-rose-100 hover:bg-rose-700 rounded-xl font-bold text-white mt-4">
            Iniciar sesión
          </button>
        </form>
        <div className="flex flex-col gap-12 justify-center items-center">
          <small className="flex gap-2">
            No tienes una cuenta?
            <Link href='/register' className="text-rose-100 font-bold cursor-pointer">
              Registrarse
            </Link>
          </small>
          <ul className='flex flex-r gap-6'>
            {
              socialLinks.map( ({ name, url, icon }) => (
                <li key={name}>
                  <Link href={url} className='text-rose-700 hover:text-rose-100'>
                    <FontAwesomeIcon icon={icon} className='w-6 h-6'/>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
