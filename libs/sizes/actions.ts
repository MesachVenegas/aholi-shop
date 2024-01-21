'use server'

import { revalidatePath } from "next/cache";
import prisma from "../prisma"


export async function newSize(data: Iterable<readonly [PropertyKey, any]>) {
  const { name, height, width, type } = Object.fromEntries(data);
  const formData = Object.fromEntries(data);
  console.log(formData);

  try {
    const size = await prisma.sizes.create({
      data: {
        name: name,
        height: height,
        width: width,
        type: type
      }
    })

    if(size){
      revalidatePath('/admin/tags')
      return size;
    }
  } catch (error) {
    throw error;
  }
}


export async function removeSize(id:number) {
  try {
    const size = await prisma.sizes.delete({
      where: {
        id: id
      }
    })

    if(size){
      revalidatePath('/admin/tags');
      return size;
    }
  } catch (error) {
    throw error;
  }
}