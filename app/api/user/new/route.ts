import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prisma from "@/libs/prisma";

export async function POST( req: Request ) {
  const dataUser = await req.json();

  try {
    // ? Validamos si el usuario ya existe.
    const userExist = await prisma.user.findUnique({
      where: {
        email: dataUser.email
      }
    })
    // ? Si no existe lo creamos.
    if (!userExist) {
      dataUser.password = await bcrypt.hash(dataUser.password, 10);

      const newUser = await prisma.user.create({
        data: {
          name: dataUser.name,
          email: dataUser.email,
          password: dataUser.password
        }
      })

      const { password: _, ...user} = newUser
      return NextResponse.json(user)
    } else {
      return NextResponse.json({
        message: "El correo electrónico ya se encuentra vinculado a una cuenta"
      }, { status: 400 })
    }

  } catch (error: any) {
    return NextResponse.json({
      message: "Ocurrió un error al realizar el registro",
      error: error.message
    }, { status: 500 })
  }

}