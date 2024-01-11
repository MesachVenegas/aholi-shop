import { prisma } from "../prisma";


export async function getCategories( search: string, page: number) {
  const categoriesPerPage = 9;

  try {
    const categories = await prisma.category.findMany({
      where: {
        OR: [
          { name: { contains: search } },
        ]
      },
      take: categoriesPerPage,
      skip: (page - 1) * categoriesPerPage
    })

    if(categories.length === 0) return [];
    return categories;
  } catch (error) {
    throw error;
  }
}


export async function getCountCategories() {
  try {
    const count = await prisma.category.count();

    return count;
  } catch (error) {
    throw error;
  }
}