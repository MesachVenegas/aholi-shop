'use server'

import { revalidatePath } from "next/cache";
import prisma from "../prisma";


export async function newCategory(data: Iterable<readonly [PropertyKey, any]>) {
  const { name, description } = Object.fromEntries(data)

  try {
    const category = await prisma.category.create({
      data: {
        name: name,
        description: description
      }
    })

    if (category) {
      revalidatePath('/admin/tags')
      return category;
    }
  } catch (error) {
    return error;
  }
}

export async function delCategory(id: number) {
  try {
    const category = await prisma.category.delete({
      where: {
        id: id
      }
    })
    if(category){
      revalidatePath('/admin/tags')
      return category;
    }
  } catch (error) {
    throw error;
  }
}