'use server'

import prisma from "@/libs/prisma";

/**
 * Retrieves a verification token by its token value.
 *
 * @param {string} token - The token value to search for.
 * @returns {Promise<VerificationToken | null>} - A promise that resolves to the found verification token, or null if not found.
 */
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: {
        token,
      },
    })

    return verificationToken;
  } catch (error) {
    return null;
  }
}

/**
 * Retrieves the verification token associated with the given email.
 *
 * @param email - The email address to search for.
 * @returns The verification token object if found, or null if not found or an error occurred.
 */
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        email,
      },
    })

    return verificationToken;
  } catch (error) {
    return null;
  }
}