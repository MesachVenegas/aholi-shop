'use server'

import prisma from "@/libs/prisma";


export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordToken = await prisma.passwordResetToke.findUnique({
      where: { token }
    })

    return passwordToken;
  } catch (error) {
    return null;
  }
}



export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordToken = await prisma.passwordResetToke.findFirst({
      where: { email }
    })

    return passwordToken;
  } catch (error) {
    return null;
  }
}