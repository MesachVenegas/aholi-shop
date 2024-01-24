'use server'

import * as z from 'zod';

import prisma from "@/libs/prisma";
import { revalidatePath } from "next/cache";
import { AddCategorySchema } from '@/schemas';


/**
 * Deletes a category with the specified ID.
 *
 * @param id - The ID of the category to delete.
 * @returns A promise that resolves to an object with a success message if the category is deleted successfully.
 * @throws An error if the category cannot be deleted or does not exist.
 */
export async function deleteCategory(id: number): Promise<{ success: string; }> {
  try {
    const productDeleted = await prisma.category.delete({
      where: { id }
    })

    if (productDeleted) {
      revalidatePath('/admin/tags')
      return { success: "Categoria Eliminado" }
    } else {
      throw new Error("La categoria no pudo ser eliminado o no existe")
    }
  } catch (error) {
    throw new Error("Oops algo ha salido mal!")
  }
}


export async function addNewCategory(data: z.infer<typeof AddCategorySchema> ) {
  const isValidFields = AddCategorySchema.safeParse(data);

  if(!isValidFields.success) throw new Error("Campos inválidos");

  const { name, description } = data;

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        description
      }
    })

    if (newCategory) {
      revalidatePath('/admin/tags')
    }

    return { success: "Categoria creada" }
  } catch (error) {
    throw error;
  }

}