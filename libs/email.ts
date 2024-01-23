'use server'

import * as z from 'zod';
import { Resend } from 'resend';

import { DOMAIN_LOGIN_REDIRECT } from '@/routes';
import { ContactEmailSchema } from '@/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a verification email to the specified email address.
 *
 * @param email - The email address to send the verification email to.
 * @param token - The verification token to include in the email.
 * @returns A promise that resolves when the email is sent successfully.
 */
export const sendVerificationEmail = async (email: string, token: string) => {
  let confirmLink = `${DOMAIN_LOGIN_REDIRECT}/auth/verification?token=${token}`;

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

/**
 * Sends a password reset email to the specified email address.
 *
 * @param email - The email address to send the password reset email to.
 * @param token - The token used for password reset.
 * @returns A promise that resolves when the email is sent successfully.
 */
export const sendPasswordResetEmail = async (email: string, token: string) => {
  let resetLink = `${DOMAIN_LOGIN_REDIRECT}/auth/reset-password?token=${token}`;

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'production') {
    resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;
  }

  await resend.emails.send({
    from: 'ventas@aholi.shop',
    to: email,
    subject: 'Restauracion de password',
    html: `
      Ingresa al enlace para continuar con el proceso de restauracion: <a href="${resetLink}">Restaurar</a></>
    `
  })
}


/**
 * Sends a contact email with the provided data.
 *
 * @param {object} data - The data for the contact email.
 * @param {string} data.name - The name of the sender.
 * @param {string} data.email - The email of the sender.
 * @param {string} data.phone - The phone number of the sender.
 * @param {string} data.message - The message from the sender.
 * @throws {Error} If the data fields are invalid.
 * @returns {Promise<void>} A promise that resolves when the email is sent.
 */
export const contactEmail = async (data: z.infer<typeof ContactEmailSchema>) => {
  const isValidFields = ContactEmailSchema.safeParse(data);

  if(!isValidFields.success) throw new Error("Campos inválidos");

  const { name, email, phone, message } = data;

  await resend.emails.send({
    from: 'vetas@aholi.shop',
    to: 'ventas@aholi.shop',
    subject: "Un cliente quiere ponerse en contacto! 🎉",
    html: `
      <div>
        <h1>Un cliente busca tus servicios</h1>
        <p>Estos son sus datos</p>
        <ul>
          <li>Nombre: ${name}</li>
          <li>Correo: ${email}</li>
          <li>Teléfono: ${phone}</li>
        </ul>
        <div>
          ${message}
        </div>
      </div>
    `
  })
}