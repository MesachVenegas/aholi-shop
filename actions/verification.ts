'use server'

import prisma from "@/libs/prisma";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";

/**
 * Verifies the email using the provided token.
 *
 * @param {string} token - The verification token.
 * @returns {Object} - An object indicating the result of the verification process. If the token is not found, the object will contain an 'error' property with the value "Token no encontrado". If the token has expired, the object will contain an 'error' property with the value "Token expirado!". If the user is not found, the object will contain an 'error' property with the value "Usuario no encontrado!". If the verification is successful, the object will contain a 'success' property with the value "Correo verificado correctamente".
 */
export const verifyEmail = async (token: string) => {
  try {
    // ? Verify if token exist
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
      throw new Error("Token no encontrado")
    }

    // ? if exist verify that token has not expired
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      return { error: "Token expirado!" };
    }

    //? If token is valid, get user by email
    const user = await getUserByEmail(existingToken.email);
    if (!user) {
      return { error: "Usuario no encontrado!" };
    }

    //? If user is found, update user to active
    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        emailVerified: new Date(),
        email: existingToken.email
      }
    });

    // ? Delete token
    await prisma.verificationToken.delete({
      where: { id: existingToken.id }
    })

    return { success: "Correo verificado correctamente" };
  } catch (error) {
    return { error: "Oops! Algo salio mal"}
  }

}