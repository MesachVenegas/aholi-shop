'use client'

import * as z from 'zod';

import { useState } from "react";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { recursive } from '@/styles/fonts';
import { Input } from '@/components/ui/Input';
import { AddCategorySchema } from "@/schemas";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { addNewCategory } from '@/actions/categories';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function AddCategory() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
    defaultValues: { name: '', description: '' }
  });

  const onSubmit =  (data: z.infer<typeof AddCategorySchema>) => {
    addNewCategory(data)
    .then( res => {
      if(res.error) toast.error(res.error);

      form.reset(data);

      toast.success(res.success)
    })
    .catch( error => {
      toast.error(`${error}`)
    })
    .finally( () =>  setIsOpen(false))
  }

  return (
      <div className="flex">
        <button
          type="button"
          className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white"
          onClick={() => setIsOpen(true)}
          >
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nueva Categoria
        </button>
        {
          isOpen && (
            <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full backdrop-blur-md z-50">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-center bg-white gap-4 w-full max-w-lg m-auto p-10 shadow-lg"
                  >
                    <h2 className={`${recursive.className} font-medium text-2xl`}>Agregar Categoria</h2>
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

                    <div className="space-y-4 w-full">
                      <FormField
                        control={form.control}
                        name="description"
                        render={({field}) => (
                          <FormItem>
                            <FormLabel>Descripcion</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Descripcion del producto"
                                className="bg-slate-200"
                                rows={4}
                                maxLength={180}
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
                        onClick={ () => {
                          setIsOpen(false)
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        className="bg-rose-100/80 hover:bg-rose-100"
                        type="submit"
                      >
                        Agregar
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
          )
        }
      </div>
  )
}
