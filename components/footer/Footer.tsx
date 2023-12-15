'use client'

import Image from "next/image";
import Link from "next/link";
import { Title5 } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuLinks, socialLinks } from "@/libs/constants";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center w-full h-72 bg-rose-100 text-white font-bold">
      <div>
        <Link href='/'>
          <div className="relative w-56 h-64">
            <Image
              src='/assets/logo_aholi.png'
              fill={true}
              alt="Aholi Decoration Logo"
            />
          </div>
        </Link>
      </div>
      <ul className="flex flex-col justify-center gap-4 h-[80%] text-lg ">
        {
          menuLinks.map( ({ name, url, icon }) => (
            <li key={name} className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
              <Link href={url} className="flex gap-2 items-center">
                <FontAwesomeIcon icon={icon} className="w-5 h-5"/>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="flex flex-col justify-end h-[70%] gap-8 ">
        <div className="flex flex-col gap-2">
          <Title5 color="text-slate-200">Redes Sociales</Title5>
          <ul className="flex gap-8">
            {
              socialLinks.map( ({ name, url, icon }) => (
                <li key={name}>
                  <Link href={url} className="text-[#fcfcfc9d] hover:text-slate-100">
                    <FontAwesomeIcon icon={icon} className="w-8 h-8"/>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <p>Aholi ©2023 | Todos los derechos Reservados</p>
      </div>
    </footer>
  )
}