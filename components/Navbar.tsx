'use client'

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars, faDoorClosed, faDoorOpen, faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";

import { menuLinks } from "@/libs/constants";
import { Title5 } from "@/components/ui/Titles";
import { Button } from '@/components/ui/button';
import { SheetClose } from "@/components/ui/sheet";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import AsideWrapper from "@/components/aside-menu_wrap";

export default function Navbar() {
  const router = useRouter();
  const user = useCurrentUser();
  const pathname = usePathname();
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-rose-100">
      <nav className="flex justify-between text-white items-center w-full max-w-[1440px] m-auto h-16 p-5  font-semibold">
        {/* brand Logo */}
        <Link href="/" prefetch={false} className="relative w-28 h-12" >
            <Image
              src='/assets/frase_aholi_alta.png'
              fill={true}
              alt='Aholi'
              sizes='(max-width: 120px)'
              className="object-contain py-[2px]"
              priority
            />
        </Link>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden gap-6 items-center relative">
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
          {/* Shopping cart and profile */}
          <div className="flex justify-between gap-2">
            <div className="flex items-center relative">
              <span
                className="flex gap-2 items-center text-sm cursor-pointer"
                onClick={ () => setToggleCart(prev => !prev)}
              >
                <FontAwesomeIcon icon={faBagShopping} className="w-5 h-5"/>
              </span>
              {
                toggleCart && (
                  <div className="dropdown_cart z-50 justify-center">
                    <Title5>Mi Carrito</Title5>
                  </div>
                )
              }
            </div>
            <div className="flex">
              <Image
                src={user && user.image ?  user.image : '/assets/default_avatar.png'}
                width={37}
                height={37}
                alt={ user && user?.name ? user.name : 'default_avatar'}
                className="object-contain rounded-full cursor-pointer"
                onClick={() => setToggleMenu( prev => !prev)}
              />
              {
                toggleMenu && (
                  <div className="dropdown z-50">
                    {
                      user && (
                        <>
                          <h3 className="text-gray-700"> {user.name} </h3>
                          <small className="text-gray-400">{user.email}</small>
                          {
                            user.role === 'admin' ? (
                              <small className="text-gray-400">Administrador</small>
                            ) : null
                          }
                          <hr className="bg-rose-100 w-full h-[2px]" />
                          {/* Profile menu */}
                          <Link
                            href={`/user/${user?.id}/profile`}
                            className="dropdown_link"
                            onClick={() => setToggleMenu(false)}
                          >
                            Mi Perfil
                          </Link>
                          <Link
                            href={`/user/${user?.id}/orders`}
                            className="dropdown_link"
                            onClick={() => setToggleMenu(false)}
                          >
                            Mis pedidos
                          </Link>
                          {
                            user?.role && user.role === 'admin' && (
                              <Link
                                href='/admin'
                                className="dropdown_link"
                                onClick={() => setToggleMenu(false)}
                              >
                                Panel de Administración
                              </Link>
                            )
                          }
                        </>
                      )
                    }
                    {
                      user ? (
                        <>
                          <button
                            type="button" className="flex justify-center items-center bg-rose-100/80 w-full rounded-xl mt-5 p-1 gap-2"
                            onClick={ () => {
                              setToggleMenu(prev => !prev)
                              signOut({
                                callbackUrl: '/'
                              })
                            }}
                          >
                            <small>Cerrar sesion</small>
                          <FontAwesomeIcon icon={faDoorClosed} className='w-4 h-4' />
                          </button>
                        </>
                      ) : (
                        <Link
                          href='/auth/login'
                          className="flex justify-center items-center bg-rose-100/80 w-full rounded-xl mt-5 p-1 gap-2"
                          onClick={ () => setToggleMenu(prev => !prev)}
                        >
                          <small>Iniciar session</small>
                          <FontAwesomeIcon icon={faDoorOpen} className='w-4 h-4' />
                        </Link>
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AsideWrapper
          title="Aholi Shop"
          styleTrigger="sm:hidden flex relative"
          icon={faBars}
        >
          <div className="flex flex-col w-full h-full gap-4">
            {
              user ? (
                <>
                  <div className="flex flex-row-reverse items-end w-full gap-2">
                    <div className="relative flex justify-center items-center w-[80px] h-[80px] p-2">
                      <Image
                        src={user && user.image ?  user.image : '/assets/default_avatar.png'}
                        width={70}
                        height={70}
                        alt={ user && user?.name ? user.name : 'default_avatar'}
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <h3 className="text-gray-700"> {user?.name} </h3>
                      <small className="text-sm md:text-md text-gray-500">{user?.email}</small>
                      {
                        user?.role === 'admin' ? (
                          <small className="text-gray-400">Administrador</small>
                        ) : null
                      }
                    </div>
                  </div>
                  <hr className="bg-rose-100 w-full h-[2px]" />
                </>
              ) : null
            }

            <div className="flex flex-col items-end w-full gap-2">
              {/* Profile menu */}
              {
                user ? (
                  <>
                    <SheetClose
                      className="flex justify-end w-full rounded-lg hover:bg-rose-700/50 hover:text-white group p-2 dropdown_link "
                      onClick={ () =>  router.push(`/user/${user?.id}/profile`)}
                    >
                      Mi Perfil
                    </SheetClose>
                    <SheetClose
                      className="flex justify-end w-full rounded-lg hover:bg-rose-700/50 hover:text-white group p-2 dropdown_link "
                      onClick={ () =>  router.push(`/user/${user?.id}/orders`)}
                    >
                      Mis pedidos
                    </SheetClose>
                    {
                      user && user.role === 'admin' && (
                        <SheetClose
                          className="flex justify-end w-full rounded-lg hover:bg-rose-700/50 hover:text-white group p-2 dropdown_link "
                          onClick={ () =>  router.push(`/admin`)}
                        >
                          Panel de Administración
                        </SheetClose>
                      )
                    }
                  </>
                ) : null
              }
              {/* General Menu */}
              {
                menuLinks.map(link =>(
                  <SheetClose
                    key={link.name}
                    className="flex justify-end w-full rounded-lg hover:bg-rose-700/50 hover:text-white group p-2 dropdown_link "
                    onClick={ () =>  router.push(link.url)}
                  >
                    {link.name}
                  </SheetClose>
                ))
              }
            </div>

            <div className="flex flex-grow justify-center items-end h-16">
              {
                    user ? (
                      <SheetClose
                          type="button"
                          className="flex justify-center text-lg text-white items-center bg-rose-100/80 hover:bg-rose-700 w-full h-12 rounded-xl gap-2"
                          onClick={ () => {
                            signOut({
                              callbackUrl: '/'
                            })
                          }}
                        >
                          Cerrar sesion
                        <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='w-6 h-6' />
                      </SheetClose>
                    ) : (
                      <SheetClose
                        className="flex justify-center text-white text-lg items-center bg-rose-100/80 hover:bg-rose-700 w-full h-12 rounded-xl gap-2"
                        onClick={ () => router.push('/login')}
                      >
                        Iniciar session
                        <FontAwesomeIcon icon={faDoorOpen} className='w-6 h-6' />
                      </SheetClose>
                    )
                  }
            </div>
          </div>
        </AsideWrapper>
      </nav>
    </div>
  )
}
