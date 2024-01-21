'use client'

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorCard = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <FontAwesomeIcon icon={faTriangleExclamation} className="w-48 h-48 text-red-500" />
      <h1 className="text-5xl md:text-8xl font-bold">Oops! Algo salio mal!</h1>
      <Link href="/auth/login" className="mt-6 bg-rose-700/80 text-white px-4 py-2 rounded-md hover:bg-rose-700">
        Regresar
      </Link>
    </div>
  )
}

export default ErrorCard