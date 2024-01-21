'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminMenu } from '@/libs/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className='flex flex-col w-full md:max-w-[250px] md:min-w-[200px] gap-8 sticky top-0 left-0 p-4 bg-lila-100/60 md:bg-lila-100 shadow-lg backdrop-blur-lg md:shadow-none z-30'>
      <ul className='flex md:flex-col gap-2 w-full'>
        {
          adminMenu.map( link => (
            <li key={link.name} className='w-full'>
              <Link
                href={link.url}
                title={link.name}
                className={`${pathname === link.url ? 'bg-rose-700 text-white' : null} flex items-center justify-center sm:justify-start gap-2 py-2 px-2 rounded-md hover:bg-rose-100/50`}
              >
                <FontAwesomeIcon icon={link.icon} className='w-5 h-5' />
                <span className='hidden sm:block'>
                  {link.name}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}
