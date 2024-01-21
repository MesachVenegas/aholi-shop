import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

/**
 * Retrieves a list of products based on the provided search criteria and page number.
 *
 * @param req - The request object containing the search criteria and page number.
 * @returns A JSON response containing the list of products that match the search criteria.
 * @throws If an error occurs while retrieving the products.
 */
export async function POST(req: Request){
  const { search , page } = await req.json();
  const productsPerPage = 9;

  try {
    const products = await prisma.products.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { id: { contains: search } }
        ]
      },
      include: {
        size: {},
        category: {}
      },
      take: productsPerPage,
      skip: (page - 1) * productsPerPage
    });

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrió un error al obtener los productos",
      error: error
    }, { status: 500 })
  }
}

export async function GET(){
  try {
    const count = await prisma.products.count();

    return NextResponse.json(count)
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrió un error al obtener los productos",
      error: error
    }, { status: 500 })
  }
}