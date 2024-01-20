'use server'

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '@/libs/prisma';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

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

  // TODO Verification Email user creation

  return { success: "Registro exitoso, revisa tu bandeja de entrada y confirma tu correo" };
}