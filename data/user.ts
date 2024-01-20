import prisma from "@/libs/prisma";


export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    })
  } catch (error) {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      }
    })
  } catch (error) {
    return null
  }
}