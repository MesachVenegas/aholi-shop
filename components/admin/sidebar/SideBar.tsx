'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { adminMenu } from '@/libs/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className='flex flex-col w-full max-w-[200px] h-[95vh] gap-8 p-4 shadow-lg'>
      <div className='flex items-center w-full gap-2'>
        <div className='relative w-12 h-12 rounded-full overflow-hidden'>
          <Image
            src='/assets/default_avatar.png'
            fill={true}
            sizes='(max-width: 50px)'
            alt='user profile'
          />
        </div>
        <div className='flex flex-col text-xs'>
          <p>Nombre de Usuario</p>
          <p>correo</p>
        </div>
      </div>
      <ul className='flex flex-col gap-2 w-full'>
        {
          adminMenu.map( link => (
            <li key={link.name} className='w-full'>
              <Link
                href={link.url}
                className={`${pathname === link.url ? 'bg-rose-700 text-white' : null} flex items-center gap-2 py-2 px-2 rounded-md hover:bg-rose-100/50`}
              >
                <FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
                {link.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className='flex flex-grow items-end justify-center py-6 px-2'>
        <button className='flex py-2 px-2 items-center gap-2 border border-rose-100 rounded-lg hover:bg-rose-700 hover:text-white transition-all'>
          <FontAwesomeIcon icon={faRightFromBracket} className='w-4 h-4' />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
