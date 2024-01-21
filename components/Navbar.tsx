'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { menuLinks } from "@/libs/constants";
import { Title5 } from "@/components/ui";
import { UserProfileProps } from "@/types/user";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function Navbar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [ userData, setUserData] = useState<UserProfileProps>();

  const getRole = async (data: string | undefined | null) => {
    const result = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const user = await result.json()
    setUserData(user)
  }

  useEffect( () => {
    if(user){
      getRole(user.email)
    }
  },[user])


  return (
    <nav className="flex justify-center text-white items-center w-full h-16 p-5 bg-rose-100 font-semibold">
      {/* brand Logo */}
      <div className="flex-grow">
        <Link href="/" prefetch={false} >
          <div className="relative w-28 h-12">
            <Image
              src='/assets/frase_aholi_alta.png'
              fill={true}
              alt='Aholi'
              sizes='(max-width: 120px)'
              className="object-contain py-[2px]"
              priority
            />
          </div>
        </Link>
      </div>

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
                          userData?.role === 'admin' ? (
                            <small className="text-gray-400">Administrador</small>
                          ) : null
                        }
                        <hr className="bg-rose-100 w-full h-[2px]" />
                        {/* Profile menu */}
                        <Link
                          href={`/user/${userData?.id}/profile`}
                          className="dropdown_link"
                          onClick={() => setToggleMenu(false)}
                        >
                          Mi Perfil
                        </Link>
                        <Link
                          href={`/user/${userData?.id}/orders`}
                          className="dropdown_link"
                          onClick={() => setToggleMenu(false)}
                        >
                          Mis pedidos
                        </Link>
                        {
                          userData?.role && userData.role === 'admin' && (
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
      <div className="sm:hidden flex relative">
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
                        <small className="text-xs md:text-sm text-gray-400">{user.email}</small>
                        {
                          userData?.role === 'admin' ? (
                            <small className="text-gray-400">Administrador</small>
                          ) : null
                        }
                        <hr className="bg-rose-100 w-full h-[2px]" />
                        {/* Profile menu */}
                        <Link href={`/user/${userData?.id}/profile`} className="dropdown_link">
                          Mi Perfil
                        </Link>
                        <Link href={`/user/${userData?.id}/orders`} className="dropdown_link">
                          Mis pedidos
                        </Link>
                        {
                          userData?.role && userData.role === 'admin' && (
                            <Link
                              href='/admin'
                              className="dropdown_link"
                              onClick={() => setToggleMenu(false)}
                            >
                              Panel de Administración
                            </Link>
                          )
                        }
                        <hr className="bg-rose-100 w-full h-[2px]" />
                      </>
                    )
                  }
                  {
                    menuLinks.map(link =>(
                      <Link href={link.url} key={link.name} className="dropdown_link" onClick={ () => setToggleMenu(false)}>
                        {link.name}
                      </Link>
                    ))
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
    </nav>
  )
}
