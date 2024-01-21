'use server'

import prisma from "@/libs/prisma"


export async function getAllSizes() {
  try {
    const sizes = await prisma.sizes.findMany();

    return sizes;
  } catch (error) {
    console.log(error);
  }
}