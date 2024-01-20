'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schemas';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log(data);
  const validateFields = LoginSchema.safeParse(data);

  if(!validateFields.success) {
    return { error: "Campos Inválidos" };
  }

  return { success: "Autentificación exitosa" };
}