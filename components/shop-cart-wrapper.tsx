'use client'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"



export default function CartWrapper({ children, counter }: { children: React.ReactNode, counter: number }) {

  return (
    <Sheet >
      <SheetTrigger className='flex justify-center px-3 items-center gap-2 relative'>
        <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
        <span className="flex justify-center items-center bg-rose-700 text-xs text-white w-4 h-4 rounded-full absolute top-[-5px] right-1">
          {counter}
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md gap-6">
        <SheetHeader className="py-4">
          <SheetTitle>Mi Carrito</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}

