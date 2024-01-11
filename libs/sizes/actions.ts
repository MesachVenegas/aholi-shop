'use server'

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";


export async function newCategory(data: Iterable<readonly [PropertyKey, any]>) {
  const { name, description } = Object.fromEntries(data)

  try {
    const category = await prisma.category.create({
      data: {
        name: name,
        description: description
      }
    })

    if(category) {
      revalidatePath('/admin/tags')
      console.log(category);
    }
  } catch (error) {
    return error;
  }
}