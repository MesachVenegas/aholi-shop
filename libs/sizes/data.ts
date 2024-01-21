'use server'

import prisma from "../prisma";

/**
 * Retrieves sizes based on search criteria and pagination.
 *
 * @param search - The search criteria to filter sizes by name.
 * @param page - The page number for pagination.
 * @returns An array of sizes that match the search criteria and pagination.
 * @throws Throws an error if there is an issue retrieving the sizes.
 */
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

/**
 * Retrieves the count of sizes from the database.
 *
 * @returns {Promise<number>} The count of sizes.
 * @throws {Error} If there is an error retrieving the count.
 */
export async function getCountSizes () {
  try {
    const count = await prisma.sizes.count();

    return count;
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves the list of sizes from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of sizes.
 * @throws {Error} If there is an error retrieving the sizes.
 */
export async function getSizeSelect() {
  try {
    const result = await prisma.sizes.findMany();

    if (result) {
      return result;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}