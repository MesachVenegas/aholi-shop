import Link from "next/link";

export function ButtonLink({href, className , children } : { href: string, children: React.ReactNode, className?: string } ) {
  return (
    <Link
      href={href}
      className={ className ? className : 'flex items-center gap-2 justify-center border border-rose-700 py-2 px-4 rounded-lg text-2xl font-medium text-rose-700 hover:text-rose-100 hover:border-rose-100'}
    >
      { children }
    </Link>
  )
}
