'use server'

import prisma from "@/libs/prisma";
import { ProductProps } from "@/types/product";


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
export const getProductsPagination = async (): Promise<number> => {
  try {
    const productsCount = await prisma.products.count();

    return productsCount;
  } catch (error) {
    throw new Error("Ocurrió un problema al obtener los datos")
  }
}



/**
 * Retrieves a product by its ID.
 *
 * @param id - The ID of the product to retrieve.
 * @returns A Promise that resolves to the product object if found, or null if not found.
 * @throws Error if the product is not found.
 */
export const getProductById = async (id: string): Promise<ProductProps | null> => {
  try {
    const product = await prisma.products.findUnique({
      where: { id: id },
      include: {
        category: {},
        size: {}
      }
    })

    return product;
  } catch (error) {
    throw new Error("No se encontró el producto")
  }
}