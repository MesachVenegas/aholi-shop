import { signIn } from "next-auth/react";
import { FcGoogle } from 'react-icons/fc';
import { DEFAULT_LOGIN_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const oauthAuthentication = (provider: "google" | "facebook") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_LOGIN_REDIRECT
    })
  }

  return (
    <>
      <button
        className="flex gap-2 w-full max-w-[200px] text-sm md:text-base h-12 items-center justify-center rounded-lg border border-slate-300 shadow-lg hover:bg-slate-100 font-semibold"
        onClick={() => oauthAuthentication("google")}
      >
        Iniciar sesion
        <FcGoogle className="w-7 h-7" />
      </button>
    </>
  )
}

export default Social