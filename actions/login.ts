'use server'

import * as z from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_LOGIN_REDIRECT } from '@/routes';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);

  if(!validateFields.success) {
    return { error: "Campos Inválidos" };
  }

  const { email, password } = validateFields.data;

  try{
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_LOGIN_REDIRECT,
    })
  } catch(error) {
    if( error instanceof AuthError){
      switch (error.type){
        case "CredentialsSignin":
          return { error: "Credenciales invalidas" };
        default:
          return { error: "Algo salio mal" };
      }
    }

    throw error;
  }

}