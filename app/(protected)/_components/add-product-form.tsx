'use client'

import { useTransition, useState } from "react";
import { useRouter } from "next/navigation";

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { AddProductSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { SizesProps } from "@/types/size";
import ToastNotification from "@/components/toast-notification";
import { toast } from "react-toastify";
import { addProduct } from "@/actions/products";



const AddProductForm = ( { categories, sizes } : { categories: CategoryProps[], sizes: SizesProps[]}) => {
  const router =  useRouter();
  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      name: '',
      description: '',
      categoryId: '',
      sizeId: '',
      price: '',
      images: ''
    }
  });

  const onSubmit =  (data: z.infer<typeof AddProductSchema>) => {
    addProduct(data)
    .then( res => {
      return;
    })
    .catch( error => {
      toast.error(`${error}`)
    })
  }

  return (
    <>
      <ToastNotification />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-xl h-full gap-2 space-y-4"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={false}
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

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="description"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Descripcion</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={false}
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

          <div className="flex w-full flex-col sm:flex-row justify-between gap-2">
            <div>
              <FormField
                control={form.control}
                name="categoryId"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="bg-slate-200">
                          <SelectValue placeholder="Selecciona una categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          categories.map( category => (
                            <SelectItem key={category?.id} value={`${category?.id}`}>{category?.name}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>
            <div>
              <FormField
                control={form.control}
                name="sizeId"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Tamaño</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="bg-slate-200">
                          <SelectValue placeholder="Selecciona una tamaño" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          sizes.map( size => (
                            <SelectItem key={size?.id} value={`${size?.id}`}>
                              {`${size?.name} (${size?.width}x${size?.height} cms)`}
                            </SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>
          </div>

          <div className="flex w-full flex-col sm:flex-row justify-between gap-2">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="price"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Precio</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={false}
                        placeholder="17.45"
                        className="bg-slate-200"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>
            {/* <div className="space-y-4">
              <FormField
                control={form.control}
                name="images"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Imágenes</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={false}
                        multiple
                        type="file"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div> */}
          </div>

          <div className="flex w-full justify-between py-2">
            <Button
              className="bg-red-500/80 hover:bg-red-500"
              type="reset"
              onClick={ () => router.back()}
            >
              Cancelar
            </Button>
            <Button
              className="bg-rose-100/80 hover:bg-rose-100"
              type="submit"
            >
              Agregar Producto
            </Button>
          </div>

        </form>
      </Form>
    </>
  )
}

export default AddProductForm