'use client'

import Link from 'next/link'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhatsButton() {
  return (
      <Link href='https://api.whatsapp.com/send?phone=523321860284' className='flex justify-center items-center fixed bg-rose-700 border border-rose-100 w-20 h-20 rounded-full z-50 right-12 bottom-12 shadow-xl'>
        <FontAwesomeIcon icon={faWhatsapp} className='w-12 h-12 text-white' />
      </Link>
  )
}
