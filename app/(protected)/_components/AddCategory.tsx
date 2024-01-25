'use client'

import * as z from 'zod';

import { useTransition } from "react";
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/Input';
import { AddCategorySchema } from "@/schemas";
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { addNewCategory } from '@/actions/categories';
import AsideWrapper from '@/components/aside-menu_wrap';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function AddCategory() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddCategorySchema>>({
    resolver: zodResolver(AddCategorySchema),
    defaultValues: { name: '', description: '' }
  });

  const onSubmit =  (data: z.infer<typeof AddCategorySchema>) => {
    startTransition( () => {
      addNewCategory(data)
      .then( res => toast.success(res.success) )
      .catch( error => toast.error(error) )
    })
  }

  return (
    <AsideWrapper
      title='Agregar nueva categoria'
      description='Aquí puedes agregar una nueva categoria ingresa un nombre y una descripcion breve de la categoria al finalizar presiona en guardar'
      styleTrigger='w-full max-w-[200px] rounded-lg bg-rose-100/80 hover:bg-rose-100 text-white font-bold'
      triggerText='Agregar'
      icon={faTag}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
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
                      disabled={isPending}
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
                      disabled={isPending}
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

          <div className="flex w-full justify-between py-2 mt-10">
            <SheetClose
              disabled={isPending}
              className="w-32 h-8 rounded-md text-white bg-red-500/80 hover:bg-red-500"
              type="reset"
            >
              Cancelar
            </SheetClose>
            <Button
              disabled={isPending}
              className="w-32 h-8 rounded-md text-white bg-rose-100/80 hover:bg-rose-100"
              type="submit"
            >
              Guardad
            </Button>
          </div>
        </form>
      </Form>
    </AsideWrapper>
  )
}
