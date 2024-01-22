'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SearchBar({ placeholder, query }: { placeholder: string, query: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback( (data : string) => {
    params.set('page', '1');
    if(data){
      data.length > 2 && params.set(query, data);
    }else {
      params.delete(query);
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300)


  return (
    <div className="flex gap-2 items-center w-full max-w-xs sm:max-w-md bg-white px-2 rounded-md">
      <FontAwesomeIcon icon={faSearch}  className='w-5 h-5 ml-2'/>
      <input
        name="search"
        type="search"
        placeholder={placeholder}
        onChange={ (e) => handleSearch(e.target.value) }
        className="flex w-full h-full p-2.5 border-none focus:outline-none"
      />
    </div>
  )
}
