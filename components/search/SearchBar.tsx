'use client'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback( (data : string) => {
    params.set('page', '1');
    if(data){
      data.length > 2 && params.set('product', data);
    }else {
      params.delete('product');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300)


  return (
    <div className="flex gap-2 items-center w-full max-w-md bg-white p-2 rounded-md">
      <FontAwesomeIcon icon={faSearch}  className='w-4 h-4'/>
      <input
        name="search"
        type="search"
        placeholder={placeholder}
        onChange={ (e) => handleSearch(e.target.value) }
        className="flex w-full h-full p-1 border-none focus:outline-none"
      />
    </div>
  )
}
