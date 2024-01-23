'use server'

import { revalidatePath } from "next/cache";

import * as z from 'zod';


import prisma from "@/libs/prisma";
import { AddNewSizeSchema } from "@/schemas";

/**
 * Deletes a size from the database.
 *
 * @param id - The ID of the size to delete.
 * @returns An object with either an error message if the size could not be deleted or does not exist, or a success message if the size was deleted successfully.
 * @throws An error if there was a problem deleting the size.
 */
export async function deleteSize(id: number){
  try {
    const size = await prisma.sizes.delete({
      where: { id }
    })

    if(!size) throw new Error("No se pudo eliminar o no existe");

    revalidatePath('/admin/tags')
    return { success: "Eliminado correctamente"}
  } catch (error) {
    throw new Error("A ocurrido un problema")
  }
}



export async function AddNewSize(data: z.infer<typeof AddNewSizeSchema>){
  const isValidFields = AddNewSizeSchema.safeParse(data);

  if(!isValidFields.success) throw new Error("Los campos son inválidos")

  const { name, width, height, type } = data;

  try {
    const newSize = await prisma.sizes.create({
      data: {
        name,
        height: String(height),
        width: String(width),
        type
      }
    });

    if(newSize){
      revalidatePath('/admin/tags')
      return { success: "Agregado correctamente"}
    }

  } catch (error) {
    throw new Error("Ocurrió un problema")
  }

}