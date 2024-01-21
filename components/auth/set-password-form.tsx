'use client'


import { useTransition, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { NewPasswordSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/Input';
import CardWrapper from '@/components/auth/card-wrapper';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { resetPasswordEmail } from '@/actions/reset-password-email';
import { Button } from '@/components/ui/button';
import { setNewPassword } from '@/actions/new-password';


function SetPasswordForm() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const token = searchParams.get('token');

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      setNewPassword(data, token)
        .then( res => {
          setError(res?.error);
          setSuccess(res?.success);
        })
    });
  }

  return (
    <CardWrapper headerLabel="Ingresa la nueva contraseña" backButtonLabel="Iniciar session" backButtonHref="/auth/login">
      <Form {...form}>
        <form
          className='w-full max-w-sm space-y-6 p-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name='password'
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nueva Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='*****'
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending}
            className=" w-full h-12 bg-rose-100/80 hover:bg-rose-100 rounded-xl font-bold text-white mt-4"
          >
            Establecer contraseña
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default SetPasswordForm;