'use server'

import * as z from 'zod';
import bcrypt from 'bcrypt';

import prisma from '@/libs/prisma';
import { NewPasswordSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { getPasswordResetTokenByToken } from '@/data/password-resetToken';


/**
 * Sets a new password for a user using a password reset token.
 *
 * @param data - The new password data.
 * @param token - The password reset token.
 * @returns An object with either an error message or a success message.
 */
export const setNewPassword = async (
  data: z.infer<typeof NewPasswordSchema>,
  token: string | null
) => {
  if (!token) {
    return { error: "Ningún token fue proporcionado"}
  }

  const validFields = NewPasswordSchema.safeParse(data);
  if (!validFields.success) {
    return { error: "Campo invalido" }
  }
  const { password } = validFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "El token proporcionado es invalido" }
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "El token proporcionado ha expirado, solicite uno nuevo" }
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "El correo no se encuentra registrado" }
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword }
  })

  await prisma.passwordResetToke.delete({
    where: { id: existingToken.id }
  })

  return { success: "Contraseña restablecida correctamente" }
}