'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { recursive } from "../ui/fonts";
import { socialLinks } from "@/libs/constants";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RegisterFormProps } from "@/types/user";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const router = useRouter();
  const { data: sesion } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>();
  const [showPass, setShowPass] = useState(false)

  const handlerRegister: SubmitHandler<RegisterFormProps> = async (data) => {
    const res = await fetch('/api/user/new', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const userRegistered = await res.json()
    console.log(userRegistered)
    if(res.ok){
      router.push('/auth/login')
    }
  }

  useEffect( () => {
    if(sesion?.user){
      router.push('/')
    }
  },[router, sesion])

  return (
    <div className="flex flex-col w-full h-full max-w-2xl bg-white justify-center items-center gap-8 p-6 xl:-ml-12  rounded-[40px] z-20 shadow-2xl">
      <h2 className={`${recursive.className} text-2xl font-bold tracking-widest`}>
        Registrarse
      </h2>
      <form className="flex flex-col w-full max-w-md gap-3" onSubmit={handleSubmit(handlerRegister)}>
        <div>
          <label htmlFor="name" className="flex w-full items-center justify-between">
            Nombre
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500 w-full max-w-[350px]"
              {...register('name', {
                required: true,
                minLength: { value: 3, message: "El nombre debe contener al menos 3 caracteres" },
                maxLength: { value: 35, message: "El nombre no puede contener mas de 30 caracteres" }
              })}
            />
          </label>
          {
            errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )
          }
        </div>
        <div>
          <label htmlFor="email" className="flex w-full items-center justify-between">
            Correo
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500 w-full max-w-[350px]"
              {...register('email', {
                required: true,
                pattern: {
                  value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Ingrese un correo valido"
                }
              })}
            />
          </label>
          {
            errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )
          }
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex w-full items-center justify-between relative">
            Contraseña
            <input
              type={showPass ? 'text' : 'password'}
              id="password"
              placeholder="********"
              className="p-2 rounded-md bg-slate-200 border border-transparent outline-none focus:outline-none focus:border-slate-500 w-full max-w-[350px]"
              {...register('password', {
                required: true,
                minLength: { value: 6, message: "La contraseña debe contener por lo menos 6 caracteres"},
                pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm, message: "La contraseña debe contener almeno una letra mayúscula, un numero y/o carácter especial"}
              })}
            />
            <FontAwesomeIcon
              className="w-4 h-4 absolute right-2 cursor-pointer z-50"
              icon={showPass ? faEyeSlash : faEye }
              onClick={ () => setShowPass( (prev) => !prev)}
            />
          </label>
          {
            errors.password ? (
              <span className="text-red-500">{errors.password.message}</span>
            ) : (
              <div className="flex flex-col">
                <small>- Debe contener al menos 6 caracteres</small>
                <small>- Debe contener al menos una letra mayúscula y números </small>
                <small>- Puede contener caracteres especiales</small>
              </div>
            )
          }
        </div>
        <button className=" w-full h-12 bg-rose-100 hover:bg-rose-700 rounded-xl font-bold text-white mt-4">
          Registrarse
        </button>
      </form>
      <div className="flex flex-col gap-12 justify-center items-center">
        <small className="flex gap-2">
          Ya tienes una cuenta?
          <Link href='/auth/login' className="text-rose-100 font-bold cursor-pointer">
            Iniciar sesión
          </Link>
        </small>
        <ul className='flex flex-r gap-6'>
          {
            socialLinks.map(({ name, url, icon }) => (
              <li key={name}>
                <Link href={url} className='text-rose-700 hover:text-rose-100'>
                  <FontAwesomeIcon icon={icon} className='w-6 h-6' />
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RegisterForm;
