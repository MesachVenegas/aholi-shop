'use server'

import prisma from "../prisma";

/**
 * Retrieves categories based on the provided search term and page number.
 *
 * @param search - The search term to filter categories by.
 * @param page - The page number to retrieve categories from.
 * @returns An array of categories that match the search term and page number.
 * @throws Throws an error if there is an issue retrieving the categories.
 */
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


/**
 * Retrieves the count of categories from the database.
 *
 * @returns {Promise<number>} The count of categories.
 * @throws {Error} If there is an error retrieving the count.
 */
export async function getCountCategories() {
  try {
    const count = await prisma.category.count();

    return count;
  } catch (error) {
    throw error;
  }
}


/**
 * Retrieves a list of categories from the database.
 *
 * @returns {Promise<Array<Category>>} A promise that resolves to an array of categories.
 * @throws {Error} If there is an error retrieving the categories.
 */
export async function getCategorySelect() {
  try {
    const result = await prisma.category.findMany();

    if (result) {
      return result;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}