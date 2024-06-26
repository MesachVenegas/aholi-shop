'use client'


import { useTransition, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { LoginSchema } from '@/schemas';
import { login } from '@/actions/login';
import { ClipLoader } from 'react-spinners';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import CardWrapper from '@/components/auth/card-wrapper';


function LoginForm() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const urlError = searchParams.get('error') === 'OAuthAccountNotLinked' ? "La cuenta ya esta asociada a un provedor" : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(data)
        .then( res => {
          if(res?.error){
            form.reset();
            setError(res?.error);
          }
          if(res?.success){
            form.reset();
            setSuccess(res?.success);
          }
        })
    });
  }

  return (
    <CardWrapper headerLabel="Iniciar Sesión" backButtonLabel="No tienes una cuenta?" backButtonHref="/auth/register"  showSocial showProviders>
      <Form {...form}>
        <form
          className='w-full max-w-sm space-y-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
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
                      placeholder='john.doe@example.com'
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
              name='password'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='**********'
                      type='password'
                    />
                  </FormControl>
                  <Button
                    size='sm'
                    variant='link'
                    asChild
                    className='hover:text-rose-100 px-0'
                  >
                    <Link href='/auth/reset'>
                      Olvidaste la contraseña?
                    </Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            >

            </FormField>
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <button
            type="submit"
            disabled={isPending}
            className="flex justify-center items-center w-full h-12 bg-rose-100 hover:bg-rose-700 rounded-xl font-bold gap-4 text-white mt-4"
          >
              { isPending ? "Iniciando..." : "Iniciar Session" }
              <ClipLoader
                color='#F1F1F1'
                loading={isPending}
                aria-label='Enviando Mensaje'
                data-testid='loading'
                size={20}
              />
          </button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default LoginForm