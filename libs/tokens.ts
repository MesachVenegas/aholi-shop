import { getVerificationTokenByEmail } from '@/data/verification-token';
import { v4 as uuidV4 } from 'uuid';
import prisma from '@/libs/prisma';

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