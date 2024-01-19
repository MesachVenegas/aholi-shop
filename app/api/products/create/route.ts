import { Prisma } from '@prisma/client';
import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { json } from 'stream/consumers';

export async function POST(req : any){
  const data = await req.formData();
  console.log(data.get('images'));
  // try {
  //   const product = await prisma.products.create({
  //     data: {
  //       name: name,
  //       description: description,
  //       categoryId: Number(category),
  //       sizeId: Number(sizeId),
  //       price: new Prisma.Decimal(price),
  //       images: ''
  //     }
  //   })

  //   // if (product) {
  //   //   revalidatePath('/admin/products')
  //   //   redirect('/admin/products')
  //   // }
  // } catch (error) {
  //   return NextResponse.json({
  //     message: "Ocurrió un error al obtener los productos",
  //     error: error
  //   }, { status: 500 })
  // }
  return NextResponse.json('creando')
}
