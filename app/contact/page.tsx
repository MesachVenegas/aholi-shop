'use client'

import { useState, useTransition } from "react";
import Image from "next/image";

import * as z from 'zod';
import { ClipLoader } from "react-spinners";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Title3 } from "@/components/ui/Titles";
import EmailModal from "@/components/EmailModal";
import WhatsButton from "@/components/WhatsButton";
import { ContactFormProps } from "@/libs/definitions";
import { CursiveTitle } from "@/components/ui/CursiveTitle";
import { ContactEmailSchema } from "@/schemas";
import { contactEmail } from "@/libs/email";
import { toast } from "react-toastify";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";


export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [confirm, setConfirm] = useState(false)
  const form = useForm<z.infer<typeof ContactEmailSchema>>({
    resolver: zodResolver(ContactEmailSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const sendMessage = async (data: z.infer<typeof ContactEmailSchema>) => {
    startTransition( () => {
      contactEmail(data)
      .then( () => {
        setConfirm(true)
      })
      .catch( () => {
        toast.error("Ocurrió un problema al enviar el correo")
      })
    })
  }

  return (
    <main className="flex flex-col justify-center items-center gap-24 p-6 w-full h-full bg-contact-img  relative">
      <div className="flex flex-col justify-center items-center gap-12 bg-slate-100/60 backdrop-blur-lg p-8 rounded-lg mt-24 mb-24">
        <CursiveTitle size="text-6xl">Mandanos un mensaje</CursiveTitle>
        <Title3>Detalles y Recuerdos para toda ocasion.</Title3>
        <div className="flex gap-12 w-full">
          <div className="md:flex md:flex-col justify-center items-center hidden">
            <Image
              src='/assets/logo_aholi.png'
              width={500}
              height={600}
              alt="gracias"
            />
          </div>

          <Form {...form}>
            <form
              className='flex flex-col gap-4 justify-center items-center w-full rounded-lg'
              onSubmit={form.handleSubmit(sendMessage)}
            >
              <div className="w-full">
                <FormField
                  control={form.control}
                  name='name'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="bg-rose-700/50 px-3 py-3 rounded-lg text-white w-full placeholder:text-slate-200"
                          disabled={isPending}
                          placeholder='John Doe'
                          type='text'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full">
                <FormField
                  control={form.control}
                  name='email'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          className="bg-rose-700/50 px-3 py-3 rounded-lg text-white w-full placeholder:text-slate-200"
                          placeholder='john.doe@example.com'
                          type='text'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full">
                <FormField
                  control={form.control}
                  name='phone'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          className="bg-rose-700/50 px-3 py-3 rounded-lg text-white w-full placeholder:text-slate-200"
                          placeholder='562 490 7801'
                          type='password'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full">
                <FormField
                  control={form.control}
                  name='message'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          disabled={isPending}
                          className="bg-rose-700/50 px-3 py-3 rounded-lg text-white w-full placeholder:text-slate-200"
                          placeholder='Tu mensaje aquí...'
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <button
                type="submit"
                className="flex gap-3 items-center justify-center w-full max-w-sm font-bold text-white py-2 px-6 text-lg rounded-lg bg-rose-700"
              >
              { !isPending ? ( <span>Enviar</span> ) : (<span>Enviando...</span>) }
              <span className='flex items-center'>
                <ClipLoader
                  color='#F1F1F1'
                  loading={isPending}
                  aria-label='Enviando Mensaje'
                  data-testid='loading'
                  size={20}
                />
              </span>
              { !isPending && ( <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" /> ) }
            </button>
            <button type="reset" className="italic underline font-bold text-sm">
              Limpiar formulario
            </button>
            </form>
          </Form>
        </div>
      </div>
      {
        confirm && ( <EmailModal setConfirm={setConfirm} /> )
      }
      <WhatsButton />
    </main>
  )
}
