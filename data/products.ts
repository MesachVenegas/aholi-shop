'use server'

import prisma from "@/libs/prisma";


/**
 * Retrieves products based on a search query and page number.
 *
 * @param query - The search query to filter products by name or ID.
 * @param page - The page number to retrieve products from.
 * @returns An array of products that match the search query and page number.
 * @throws An error if there is a problem retrieving the data.
 */
export const getProductsSearch = async (query: string, page: string) => {
  const productsPerPage = 8;

  try {
    const products = await prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { id: { contains: query } }
        ]
      },
      include: {
        size: {},
        category: {}
      },
      take: productsPerPage,
      skip: (Number(page) - 1) * productsPerPage
    });


    return products;
  } catch (error) {
    throw new Error("Ocurrió un problema al obtener los datos")
  }
}

/**
 * Retrieves the total count of products from the database.
 *
 * @returns {Promise<number>} The total count of products.
 * @throws {Error} If there is an error while retrieving the data.
 */
export const getProductsPagination = async () => {
  try {
    const productsCount = await prisma.products.count();

    return productsCount;
  } catch (error) {
    throw new Error("Ocurrió un problema al obtener los datos")
  }
}