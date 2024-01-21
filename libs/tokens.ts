'use server'

import { v4 as uuidV4 } from 'uuid';

import prisma from '@/libs/prisma';
import { getVerificationTokenByEmail } from '@/data/verification-token';
import { getPasswordResetTokenByEmail } from '@/data/password-resetToken';

/**
 * Generates a verification token for the given email.
 *
 * @param {string} email - The email for which the verification token is generated.
 * @returns {Promise<object>} - A promise that resolves to the generated verification token.
 */
export const generateVerificationToken = async (email: string) => {
  const token = uuidV4();
  // expires token in 1 hour
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id }
    })
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return verificationToken;
}


/**
 * Generates a reset password token for the given email.
 *
 * @param {string} email - The email address for which to generate the reset password token.
 * @returns {Promise<object>} - A promise that resolves to the generated password reset token.
 */
export const generateResetPasswordToken = async (email: string) => {
  const token = uuidV4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  // ? verify if token exist if exist delete the old token.
  const existingToken = await getPasswordResetTokenByEmail(email);
  if (existingToken) {
    await prisma.passwordResetToke.delete({
      where: { id: existingToken.id }
    })
  }
  // ? add the new token
  const passwordResetToken = await prisma.passwordResetToke.create({
    data: {
      email,
      token,
      expires
    }
  })

  return passwordResetToken;
}