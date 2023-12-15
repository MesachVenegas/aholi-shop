'use client'

import { menuLinks } from "@/libs/constants";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();


  return (
    <nav className="flex justify-center text-white items-center w-full h-16 p-5 bg-rose-100 font-semibold">
      <div className="flex-grow">
        <Link href="/">
          <div className="relative w-28 h-12">
            <Image
              src='/frase aholi_alta.png'
              fill={true}
              alt='Aholi'
              style={{ objectFit: 'cover'}}
            />
          </div>
        </Link>
      </div>
      <div className="flex-grow hidden md:flex">
        <ul className="flex-grow flex gap-4">
          {
            menuLinks.map(link =>(
              <li
                key={link.name}
                className={
                  `relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${pathname === link.url ? 'after:block after:absolute after:h-[3px] after:w-full after:bg-white after:scale-x-100' : ''}`
                }
              >
                <Link href={link.url}>
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="flex gap-4">
          <li>
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 cursor-pointer"/>
          </li>
          <li>
            <FontAwesomeIcon icon={faBagShopping} className="w-5 h-5 cursor-pointer"/>
          </li>
        </ul>
      </div>
    </nav>
  )
}
