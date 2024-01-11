import { prisma } from "../prisma";

export async function getSizes (search: string, page: number) {
  const sizePerPage = 9;

  try {
    const sizes = await prisma.sizes.findMany({
      where: {
        OR: [
          { name: { contains: search }}
        ]
      },
      take: sizePerPage,
      skip: (page - 1) * sizePerPage
    })

    if(sizes.length === 0) return [];
    return sizes;
  } catch (error) {
    throw error;
  }
}


export async function getCountSizes () {
  try {
    const count = await prisma.sizes.count();

    return count;
  } catch (error) {
    throw error;
  }
}