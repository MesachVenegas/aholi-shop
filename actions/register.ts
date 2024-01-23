'use server'

import * as z from 'zod';
import bcrypt from 'bcrypt';
import prisma from '@/libs/prisma';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/libs/tokens';
import { sendVerificationEmail } from '@/libs/email';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Ocurrió un error" };
  }

  const { name, email, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if(existingUser) {
    return { error: "El correo ya está registrado" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    },
  })

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Correo de confirmacion enviado, es posible que llego a la bandeja de correo no deseado" };
}