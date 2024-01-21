import prisma from "@/libs/prisma";


/**
 * Retrieves a user from the database based on their email.
 *
 * @param email - The email of the user to retrieve.
 * @returns A Promise that resolves to the user object if found, or null if not found.
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    console.log(user);
    return user;
  } catch (error) {
    return null
  }
}

/**
 * Retrieves a user by their ID.
 *
 * @param {string} id - The ID of the user.
 * @returns A Promise that resolves to the user object if found, or null if not found.
 */
export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      }
    })

    return user
  } catch (error) {
    return null
  }
}