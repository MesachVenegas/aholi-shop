'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a verification email to the specified email address.
 *
 * @param email - The email address to send the verification email to.
 * @param token - The verification token to include in the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export const sendVerificationEmail = async (email: string, token: string) => {
  let confirmLink = `${process.env.HOST_URL}/auth/verification?token=${token}`;

  if (process.env.NODE_ENV !== 'production'){
    confirmLink = `http://localhost:3000/auth/verification?token=${token}`;
  }

  await resend.emails.send({
    from: 'ventas@aholi.shop',
    to: email,
    subject: 'Confirmación de cuenta',
    html: `Valida tu cuenta con el siguiente enlace: <a href="${confirmLink}">Confirmar</a></>`
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  let resetLink = `${process.env.HOST_URL}/auth/reset-password?token=${token}`;

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'production') {
    resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;
  }

  await resend.emails.send({
    from: 'ventas@aholi.shop',
    to: email,
    subject: 'Restauracion de password',
    html: `Ingresa al enlace para continuar con el proceso de restauracion: <a href="${resetLink}">Restaurar</a></>`
  })
}