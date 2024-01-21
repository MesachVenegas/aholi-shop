'use server'

import prisma from "../prisma";

/**
 * Retrieves products based on the provided search criteria.
 *
 * @param {string} search - The search criteria to filter products by.
 * @param {number} page - The page number of the results.
 * @param {number} productsPerPage - The number of products to retrieve per page.
 * @returns {Promise<Array>} An array of products that match the search criteria.
 * @throws {Error} If an error occurs while retrieving the products.
 */
export async function getProducts(search: string, page: number) {
  const productsPerPage = 8;

  try {
    const products = await prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: search} },
          { id: { contains: search} }
        ]
      },
      include: {
        size: {},
        category: {}
      },
      take: productsPerPage,
      skip: (page - 1) * productsPerPage
    });

    if(products.length === 0) return[];
    return products;
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves the total number of products.
 *
 * @returns {Promise<number>} The total number of products.
 * @throws {Error} If an error occurs while retrieving the total number of products.
 */
export async function totalProducts () {
  try {
    const count = await prisma.products.count();

    return count;
  } catch (error) {
    throw error;
  }
}