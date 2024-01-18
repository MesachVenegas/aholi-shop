import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req: Request){
  const userEmail = await req.json();
  try {
    const userFind = await prisma.user.findUnique({
      where: {
        email: userEmail
      }
    })

    return NextResponse.json(userFind)
  } catch (error: any) {
    return NextResponse.json({
      message: "Ocurrió un problema en el servidor",
      error: error.message
    }, { status: 500})
  }
}