'use client'

import Link from 'next/link'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhatsButton() {
  return (
      <Link
        href='https://api.whatsapp.com/send?phone=523321860284'
        className='flex justify-center items-center fixed bg-rose-700 border border-rose-100 w-12 h-12 lg:w-20 lg:h-20 rounded-full z-50 right-4 bottom-1/2 shadow-xl'
      >
        <FontAwesomeIcon icon={faWhatsapp} className='w-8 h-8 lg:w-12 lg:h-12 text-white' />
      </Link>
  )
}
