'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { signIn } from 'next-auth/react'
import { recursive } from "../ui/fonts"
import { socialLinks } from "@/libs/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormProps } from "@/types/user"

function LoginForm() {
  const router = useRouter();
  const { data: sesion } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>();
  const [loginError, setLoginError] = useState<string>("")

  const handleLogin: SubmitHandler<LoginFormProps> = async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if(res?.error) {
      setLoginError(res.error)
    } else {
      router.back();
    }
  }

  useEffect( () => {
    if(sesion?.user){
      router.push('/')
    }
  },[router, sesion])

  return (
    <div className="flex flex-col w-full h-full max-w-2xl bg-white justify-center items-center gap-8 p-6 xl:-ml-12  rounded-[40px] z-20 shadow-2xl">
      <h2 className={`${recursive.className} text-2xl font-bold tracking-widest`}>Iniciar Sesión</h2>
      <button
        className="flex gap-2 w-full max-w-sm text-sm md:text-base h-12 items-center justify-center rounded-lg border border-slate-400 shadow-lg hover:bg-slate-100"
        onClick={async () => {
          await signIn('google',{
            callbackUrl: '/'
          })
        }}
      >
        Iniciar sesion con Google
        <Image src='/assets/google.svg' width={30} height={30} alt="google_logo" />
      </button>
      <div className="flex gap-4 w-full justify-center items-center text-slate-500">
        <hr className="flex w-[80px]" />
        <span>O</span>
        <hr className="flex w-[80px]" />
      </div>
      <form className="flex flex-col w-full max-w-md gap-3" onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex justify-between items-center w-full">
            Correo
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className={`${errors.password ? "border border-red-500 p-2 rounded-md bg-slate-200 outline-none focus:outline-none focus:border-red-500" : "p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500"} w-full max-w-[350px]`}
              {...register('email', {
                required: { value: true, message: "El correo es requerido"},
                pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Ingrese un correo valido"
                }
              })}
            />
          </label>
          {
            errors.email && (
              <span className="text-red-500 text-sm self-end">{errors.email?.message}</span>
            )
          }
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center justify-between w-full">
            Contraseña
            <input
              type="password"
              id="password"
              placeholder="********"
              className={`${errors.password ? " border-red-500 p-2 rounded-md bg-slate-200 outline-none focus:outline-none focus:border-red-500" : "p-2 rounded-md bg-slate-200 border-transparent outline-none focus:outline-none focus:border-slate-500"} border w-full max-w-[350px]`}
              {...register('password', {
                required: { value:true, message: "Ingrese una contraseña"},
                minLength: { value: 6, message: "La contraseña debe contener por lo menos 6 caracteres"},
              })}
            />
          </label>
          {
              errors.password && (
                <span className="text-red-500 text-sm self-end">{errors.password?.message}</span>
              )
            }
        </div>
        <button className=" w-full h-12 bg-rose-100 hover:bg-rose-700 rounded-xl font-bold text-white mt-4">
          Iniciar sesión
        </button>
        {
          loginError && (
            <div className="w-full p-2 bg-slate-200 font-semibold italic text-center text-red-600 rounded-md">
              <small>
                {loginError}
              </small>
            </div>
          )
        }
      </form>
      <div className="flex flex-col gap-12 justify-center items-center">
        <small className="flex gap-2">
          No tienes una cuenta?
          <Link href='/auth/register' className="text-rose-100 font-bold cursor-pointer">
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
  )
}

export default LoginForm