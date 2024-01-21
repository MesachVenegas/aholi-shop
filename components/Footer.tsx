'use client'

import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { Title5 } from "@/components/ui";
import { menuLinks, socialLinks } from "@/libs/constants";

export default function Footer() {
  return (
    <footer className="flex flex-wrap xl:flex-row gap-8 justify-around items-center w-full h-full 2xl:h-72 bg-rose-100 text-white font-bold p-4">
      <div className="w-full max-w-md">
        <Link href='/' prefetch={false}>
          <div className="relative w-56 h-64">
            <Image
              src='/assets/logo_aholi.png'
              fill={true}
              sizes='(max-width: 230px)'
              alt="Aholi Decoration Logo"
            />
          </div>
        </Link>
      </div>
      <ul className="flex flex-col justify-center  gap-4 w-full max-w-sm  h-[80%] text-lg ">
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
      <div className="flex flex-col justify-end w-full max-w-sm h-[70%] gap-8 ">
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
        <div className="flex flex-col gap-1">
          <p>Aholi ©2024 | Todos los derechos Reservados</p>
          <a href='https://www.codefyplus.com/' >
            Hecho con
            <span> <FontAwesomeIcon icon={faHeart} beat className="w-4 h-4" /> </span>
            By <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-yellow-700 inline-block text-transparent bg-clip-text text-xl">
              Codefy+
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
