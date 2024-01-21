import * as z from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '@/libs/prisma';
import { ResetPasswordSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const resetPasswordEmail = async (data: z.infer<typeof ResetPasswordSchema>) => {
  const validateFields = ResetPasswordSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Correo invalido" }
  }

  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email no encontrado" }
  }

  return { success: "Correo de restauracion enviado" }
}