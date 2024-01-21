'use client'


import { useTransition, useState } from 'react';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { ResetPasswordSchema } from '@/schemas';
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
import { resetPasswordEmail } from '@/actions/reset-password';
import { Button } from '@/components/ui/button';


function ResetForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: z.infer<typeof ResetPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      resetPasswordEmail(data)
        .then( res => {
          console.log(res);
          setError(res?.error);
          setSuccess(res?.success);
        })
    });
  }

  return (
    <CardWrapper headerLabel="Restablecer contraseña" backButtonLabel="Iniciar session" backButtonHref="/auth/login">
      <Form {...form}>
        <form
          className='w-full max-w-sm space-y-6 p-4'
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
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending}
            className=" w-full h-12 bg-rose-100/80 hover:bg-rose-100 rounded-xl font-bold text-white mt-4"
          >
            Confirmar correo
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}

export default ResetForm