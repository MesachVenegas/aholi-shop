import * as z from 'zod';

import { getUserByEmail } from '@/data/user';
import { ResetPasswordSchema } from '@/schemas';
import { sendPasswordResetEmail } from '@/libs/email';
import { generateResetPasswordToken } from '@/libs/tokens';

/**
 * Resets the password for a user based on the provided email.
 *
 * @param data - The data object containing the email to reset the password for.
 * @returns An object with either an error message or a success message.
 *          - If the email is invalid, returns { error: "Correo invalido" }.
 *          - If the email is not found, returns { error: "Email no encontrado" }.
 *          - If the email is found and the password reset email is sent successfully, returns { success: "Correo de restauracion enviado" }.
 */
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

  const passwordResetToken = await generateResetPasswordToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Correo de restauracion enviado" }
}