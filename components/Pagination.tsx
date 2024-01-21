'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Pagination({ count } : { count: number}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get('page') || '1';
  const params = new URLSearchParams(searchParams);
  const itemPerPage = 8;

  const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count;

  const handlePagination = ( type: 'prev' | 'next') => {
    type == 'prev'
      ? params.set('page', (parseInt(page) - 1).toString())
      : params.set('page', (parseInt(page) + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between w-full px-5 mt-7">
      <button
        className={`flex gap-2 items-center bg-rose-100 py-1 px-3 rounded-lg text-white hover:bg-rose-700 ${!hasPrev ? 'opacity-50 cursor-not-allowed' : null }`}
        disabled={!hasPrev}
        onClick={() => handlePagination('prev') }
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="w-4 h-4"/>
        Volver
      </button>
      <button
        className={`flex gap-2 items-center bg-rose-100 py-1 px-3 rounded-lg text-white hover:bg-rose-700 ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!hasNext}
        onClick={() => handlePagination('next') }
      >
        Siguiente
        <FontAwesomeIcon icon={faCircleArrowRight} className="w-4 h-4"/>
      </button>
    </div>
  )
}
