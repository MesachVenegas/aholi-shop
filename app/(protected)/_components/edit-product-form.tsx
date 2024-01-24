'use client'

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { SizesProps } from "@/types/size";
import { AddProductSchema } from "@/schemas";
import { Input } from "@/components/ui/Input";
import { ProductProps } from "@/types/product";
import { Button } from "@/components/ui/button";
import { updateProduct } from "@/actions/products";
import { Textarea } from "@/components/ui/textarea";
import ToastNotification from "@/components/toast-notification";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ClipLoader } from "react-spinners";



const EditProductForm = ( {
  categories, sizes, product } : { categories: CategoryProps[], sizes: SizesProps[], product: ProductProps
}) => {

  const router =  useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      name: product?.name || undefined,
      description: product?.description || undefined,
      categoryId: String(product?.categoryId) || undefined,
      sizeId: String(product?.sizeId) || undefined,
      price: String(product?.price),
      images: product?.images || undefined
    }
  });

  const onSubmit =  (data: z.infer<typeof AddProductSchema>) => {
    startTransition( () => {
      updateProduct(data, product?.id as string)
      .then( res => {
        if(res.success){
          toast.success(res.success, {
            onClose: () => router.push('/admin/products')
          })
        }
      })
      .catch( error => {
        toast.error(error)
      })
    })
  }

  return (
    <>
      <ToastNotification closeIn={1500} />
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                    <Select onValueChange={field.onChange} disabled={isPending}>
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
                    <Select onValueChange={field.onChange} disabled={isPending}>
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
                        disabled={isPending}
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
                type="submit"
                className="bg-rose-100/80 hover:bg-rose-100"
              >
              { !isPending ? ( <span>Guardar</span> ) : (<span>Guardando...</span>) }
              <span className='flex items-center'>
                <ClipLoader
                  color='#F1F1F1'
                  loading={isPending}
                  aria-label='Enviando Mensaje'
                  data-testid='loading'
                  size={20}
                />
              </span>
            </Button>
          </div>

        </form>
      </Form>
    </>
  )
}

export default EditProductForm