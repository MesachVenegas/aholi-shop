'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import * as z from 'zod';

import prisma from "@/libs/prisma";
import { AddProductSchema } from "@/schemas";

/**
 * Adds a new product to the database.
 *
 * @param data - The data of the product to be added. Must conform to the AddProductSchema.
 * @throws Error - If the data does not conform to the AddProductSchema.
 * @returns void
 */
export async function addProduct(data: z.infer<typeof AddProductSchema>) {

  const isValidField = AddProductSchema.safeParse(data);

  if(!isValidField.success){
    throw new Error("Campos inválidos")
  }

  const { name, description, categoryId, sizeId, price, images } = data;
  // const { name, category, description, price, sizes } = data;

  try {
    const product = await prisma.products.create({
      data: {
        name: name,
        description: description,
        categoryId: Number(categoryId),
        sizeId: Number(sizeId),
        price: Number(price),
        images: ''
      }
    })

    if (product) {
      revalidatePath('/admin/products')
      redirect('/admin/products')
    }
  } catch (error) {
    throw error;
  }
}


/**
 * Deletes a product from the database.
 *
 * @param {string} id - The ID of the product to be deleted.
 * @returns {Promise<{ success: string }>} - A promise that resolves to an object with a success message if the product is deleted successfully.
 * @throws {Error} - Throws an error if the product cannot be deleted or does not exist.
 */
export async function deleteProduct ( id: string) {
  try {
    const productDeleted = await prisma.products.delete({
      where: { id }
    })

    if(productDeleted){
      revalidatePath('/admin/products')
      return { success : "Producto Eliminado"}
    } else {
      throw new Error("El Producto no pudo ser eliminado o no existe")
    }
  } catch (error) {
    throw error
  }
}
