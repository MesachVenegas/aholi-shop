'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default function AsideWrapper({
  title,
  description,
  styleTrigger,
  triggerText,
  icon,
  children,
}: {
  title?: string,
  description?: string,
  styleTrigger: string,
  triggerText?: string,
  icon?: IconDefinition,
  children: React.ReactNode
}) {

  return (
    <Sheet >
      <SheetTrigger className={`flex justify-center px-3 items-center gap-2 ${styleTrigger}`}  >
        { icon ? <FontAwesomeIcon icon={icon} className="w-7 h-7" /> : null }
        { triggerText }
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md gap-6">
        <SheetHeader className="py-4">
          <SheetTitle>{ title }</SheetTitle>
          <SheetDescription>
            { description }
        </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}

