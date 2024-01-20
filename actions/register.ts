'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schemas';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  console.log(data);
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Ocurrió un error" };
  }

  return { success: "Correo enviado!" };
}