'use client'

import { useState } from 'react'

import * as z from 'zod';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { recursive } from '@/styles/fonts';
import { AddNewSize } from '@/actions/sizes';
import { AddNewSizeSchema } from '@/schemas';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import ToastNotification from '@/components/toast-notification';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function AddSize() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof AddNewSizeSchema>>({
    resolver: zodResolver(AddNewSizeSchema),
    defaultValues: {
      name: '',
      height: '',
      width: '',
      type: ''
    }
  });

  const handleSave = (data : z.infer<typeof AddNewSizeSchema>) => {
    AddNewSize(data)
      .then( res => {
        form.reset()
        toast.success(res?.success)
      }).catch( error => {
        toast.error(error)
      })
      .finally( () => setIsOpen(false))
  }


  return (
    <div className="flex">
        <button
          type='button'
          className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white"
          onClick={() => setIsOpen(true)}
          >
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nuevo Tamaño
        </button>
        {
          isOpen && (
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full backdrop-blur-md z-50">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSave)}
                  className="flex flex-col justify-center items-center bg-white gap-4 w-full max-w-lg rounded-md m-auto p-10 shadow-lg"
                >
                  <h2 className={`${recursive.className} font-medium text-2xl`}>Agregar Nuevo Tamaño</h2>
                  <div className="space-y-4 w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Nombre del producto"
                              className="bg-slate-200"
                              type='text'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                  </div>

                  <div className='flex justify-between w-full gap-2'>
                    <div className="space-y-4 w-full">
                      <FormField
                        control={form.control}
                        name="height"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Altura</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Altura en cms"
                                className="bg-slate-200"
                                type='number'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                    </div>
                    <div className="space-y-4 w-full">
                      <FormField
                        control={form.control}
                        name="width"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Ancho</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Ancho en cms"
                                className="bg-slate-200"
                                type='number'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      >
                      </FormField>
                    </div>
                  </div>

                  <div className="space-y-4 w-full">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({field}) => (
                        <FormItem>
                          <FormLabel>Tipo/Forma</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Hexagonal, circular ..."
                              className="bg-slate-200"
                              type='text'
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    >
                    </FormField>
                  </div>

                  <div className="flex w-full justify-between py-2 mt-5">
                    <Button
                      className="bg-red-500/80 hover:bg-red-500"
                      type="reset"
                      onClick={ () => { setIsOpen(false) }}
                    >
                      Cancelar
                    </Button>
                    <Button className="bg-rose-100/80 hover:bg-rose-100" type="submit">
                      Agregar
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )
        }
        <ToastNotification />
    </div>
  )
}
