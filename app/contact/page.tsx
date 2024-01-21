'use client'

import { useState } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { CursiveTitle, Title3 } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormProps } from "@/libs/definitions";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import EmailModal from "@/components/contact/EmailModal";


export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirm, setConfirm] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm<ContactFormProps>();

  const sendMessage : SubmitHandler<ContactFormProps> = async (data) => {
    setIsLoading(true);
    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      data,
      process.env.NEXT_PUBLIC_KEY
      ).then((response) => {
      setIsLoading(false);
      setConfirm(true);
    }).catch( (error) => console.log(error))
  }

  return (
    <main className="flex flex-col justify-center items-center gap-24 p-6 w-full h-full bg-contact-img  relative">
      <div className="flex flex-col justify-center items-center gap-12 bg-slate-100/60 backdrop-blur-lg p-8 rounded-lg mt-24 mb-24">
        <CursiveTitle size="text-6xl">Mandanos un mensaje</CursiveTitle>
        <Title3>Detalles y Recuerdos para toda ocasion.</Title3>
        <div className="flex gap-12">
          <div className="md:flex md:flex-col justify-center items-center hidden">
            <Image
              src='/assets/logo_aholi.png'
              width={500}
              height={600}
              alt="gracias"
            />
          </div>
          <form className="flex flex-col gap-2 justify-center items-center w-full rounded-lg" onSubmit={handleSubmit(sendMessage)}>
            <div className="w-full">
              <label>
                Nombre
                <input
                  className="bg-rose-700/50 px-3 py-1 rounded-lg text-white w-full max-w-sm"
                  type="text"
                  {...register('name', { required: true })}
                  autoFocus
                />
              </label>
            </div>
            <div className="w-full">
              <label >
                Correo Electrónico
                <input
                  className="bg-rose-700/50 px-3 py-1 rounded-lg text-white w-full max-w-sm"
                  type="email"
                  {...register('email', { required: true })}
                />
              </label>
            </div>
            <div className="w-full">
              <label >
                Teléfono de contacto
                <input
                  className="bg-rose-700/50 px-3 py-1 rounded-lg text-white w-full max-w-sm"
                  type="text"
                  {...register('phone', { required: true })}
                />
              </label>
            </div>
            <div className="w-full">
              <label htmlFor="message" >
                Mensaje
                <textarea
                  className="w-full p-2 rounded-lg max-w-sm text-white bg-rose-700/50"
                  title="message"
                  id="message"
                  rows={5}
                  {...register('message', { required: true })}
                />
              </label>
            </div>
            <button className="flex gap-3 items-center justify-center w-full max-w-sm font-bold text-white py-2 px-6 text-lg rounded-lg bg-rose-700">
              {
                !isLoading ? ( <span>Enviar</span> ) : (<span>Enviando...</span>)
              }
              <span className='flex items-center'>
                <ClipLoader
                  color='#F1F1F1'
                  loading={isLoading}
                  aria-label='Enviando Mensaje'
                  data-testid='loading'
                  size={20}
                />
              </span>
              {
                !isLoading && ( <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" /> )
              }
            </button>
            <button className="italic underline font-bold text-sm">
              Limpiar formulario
            </button>
          </form>
        </div>
      </div>
      {
        confirm && ( <EmailModal setConfirm={setConfirm} /> )
      }
    </main>
  )
}
