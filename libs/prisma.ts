import { PrismaClient } from "@prisma/client";

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const prismaClientSingleton = () => {
  return new PrismaClient();
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV === 'production') {
  globalForPrisma.prisma = prisma;
}