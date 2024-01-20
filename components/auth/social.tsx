import Image from "next/image";
import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
  return (
    <>
      <button
        className="flex gap-2 w-full max-w-[200px] text-sm md:text-base h-12 items-center justify-center rounded-lg border border-slate-300 shadow-lg hover:bg-slate-100 font-semibold"
        onClick={async () => {
          await signIn('google',{
            callbackUrl: '/'
          })
        }}
      >
        Iniciar sesion
        <FcGoogle className="w-7 h-7" />
      </button>
    </>
  )
}

export default Social