/**
 * Initializes a global instance of the PrismaClient from the @prisma/client package.
 *
 * @remarks
 * This code snippet exports a `prisma` object that can be used to interact with the database using Prisma.
 * It checks if a global `prisma` object already exists, and if not, creates a new instance of PrismaClient.
 * In development mode, it assigns the `prisma` object to the global scope for easy access.
 *
 * @example
 * //* Import the prisma object
 * import { prisma } from './prisma';
 *
 * //* Use the prisma object to interact with the database
 * const users = await prisma.user.findMany();
 *
 * @see {@link https://www.prisma.io/docs/concepts/components/prisma-client Prisma Client Documentation}
 */
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
}

type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>


const globalForPrisma = globalThis as unknown as {
  prisma: prismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;