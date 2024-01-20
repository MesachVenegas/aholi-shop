'use client'

import Link from "next/link";
import { recursive } from "@/components/ui/fonts";
import Social from "@/components/auth/social";
import { socialLinks } from "@/libs/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps ) => {
  return (
    <div className="flex flex-col w-full h-full max-w-2xl bg-white justify-center items-center gap-2 p-6 lg:-ml-12  rounded-[40px] z-20 shadow-2xl">
      <h2 className={`${recursive.className} text-2xl font-bold tracking-widest`}>
        {headerLabel}
      </h2>

      <div className="flex w-full justify-center items-center p-2">
        {children}
      </div>

      {
        showSocial && (
          <div className="w-full flex justify-center items-center mt-6">
            <Social />
          </div>
        )
      }

      <div className="flex flex-col gap-12 justify-center items-center mt-5">
        <BackButton label={backButtonLabel} href={backButtonHref}/>
        <ul className='flex flex-r gap-6'>
          {
            socialLinks.map( ({ name, url, icon }) => (
              <li key={name}>
                <Link href={url} className='text-rose-700 hover:text-rose-100'>
                  <FontAwesomeIcon icon={icon} className='w-6 h-6'/>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CardWrapper