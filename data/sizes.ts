'use server'

import prisma from "@/libs/prisma"


/**
 * Retrieves all sizes from the database.
 *
 * @returns {Promise<Array<Size>>} A promise that resolves to an array of sizes.
 * @throws {Error} If there is an error retrieving the sizes.
 */
export async function getAllSizes() {
  try {
    const sizes = await prisma.sizes.findMany();

    return sizes;
  } catch (error) {
    console.log(error);
  }
}


/**
 * Retrieves the total count of sizes from the database.
 *
 * @returns {Promise<number>} The total count of sizes.
 * @throws {Error} If an error occurs while retrieving the count.
 */
export async function getSizePagination() {
  try {
    const count = await prisma.sizes.count()

    return count;
  } catch (error) {
    throw new Error("Oops algo ha salido mal")
  }

}


/**
 * Retrieves a list of sizes based on the provided search query and page number.
 *
 * @param query - The search query to filter the sizes by.
 * @param page - The page number to retrieve the sizes from.
 * @returns A list of sizes that match the search query and page number.
 * @throws Error if an error occurs while retrieving the sizes.
 */
export async function getSizeSearch(query: string, page: string){
  const sizesPerPage = 9;
  try {
    const result = await prisma.sizes.findMany({
      where: {
        OR: [
          { name: { contains: query }},
        ]
      },
      take: sizesPerPage,
      skip: (Number(page) - 1) * sizesPerPage
    })

    if(!result) return;

    return result;
  } catch (error) {
    throw new Error("Oops algo a salido mal")
  }
}