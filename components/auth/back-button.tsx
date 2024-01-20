'use client'

import Link from "next/link";


interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({
  label,
  href
}: BackButtonProps) => {
  return (
    <Link href={href} className="text-rose-100 text-xs font-bold cursor-pointer hover:underline italic">
      {label}
    </Link>
  )
}

export default BackButton