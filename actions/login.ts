'use server'

import * as z from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT, DOMAIN_LOGIN_REDIRECT } from '@/routes';
import { generateVerificationToken } from '@/libs/tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/libs/email';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);

  if(!validateFields.success) {
    return { error: "Campos Inválidos" };
  }

  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if(!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Datos de autenticación inválidos, el email no esta registrado." };
  }

  if(!existingUser.emailVerified){
    const verificationToken = await generateVerificationToken(existingUser.email as string);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);
    return { success: "Por favor verifica tu cuenta con el link enviado a tu correo electrónico"};
  }

  try{
    await signIn('credentials', {
      email,
      password,
      redirectTo: process.env.NODE_ENV === 'production' ? DOMAIN_LOGIN_REDIRECT : DEFAULT_LOGIN_REDIRECT,
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