'use client'

import { useState } from 'react';

import * as z from 'zod';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';

import { AddNewSize } from '@/actions/sizes';
import { AddNewSizeSchema } from '@/schemas';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import AsideWrapper from '@/components/aside-menu_wrap';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


export default function AddSize() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof AddNewSizeSchema>>({
    resolver: zodResolver(AddNewSizeSchema),
    defaultValues: {
      name: undefined,
      height: undefined,
      width: undefined,
      type: undefined
    }
  });

  const handleSave = (data : z.infer<typeof AddNewSizeSchema>) => {
    AddNewSize(data)
      .then( res => {
        toast.success(res?.success)
      }).catch( error => {
        toast.error(error)
      })
  }


  return (
    <div className="flex">
        <AsideWrapper
          title='Agregar Tamaño'
          description='Aquí podrás agregar un nuevo tamaño rellena los campos con la información requerida y al finalizar no olvides guardar los cambios'
          triggerText='Agregar'
          styleTrigger='bg-rose-100/80 hover:bg-rose-100 rounded-lg text-white w-full max-w-[250px]'
          icon={faMaximize}
        >
          <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSave)} >
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
                    <SheetClose>
                      <Button className="bg-red-500/80 hover:bg-red-500" type="reset" >
                        Cancelar
                      </Button>
                    </SheetClose>
                    <Button className="bg-rose-100/80 hover:bg-rose-100" type="submit">
                      Agregar
                    </Button>
                  </div>
                </form>
              </Form>
        </AsideWrapper>
    </div>
  )
}
