import Pagination from "@/components/pagination/Pagination";
import SearchBar from "@/components/search/SearchBar";
import { ButtonLink } from "@/components/ui";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SizesTable from "../tables/SizesTables";

const sizes = [
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
  { name: 'Small', height: '28', width: '7', type: 'circular' },
]
export default async function SizesSection() {
  return (
    <section className="flex flex-col gap-2 p-4 shadow-2xl rounded-lg bg-white h-[87vh]">
      <div className="flex justify-between w-full p-2">
        <SearchBar placeholder="Buscar Categoria" />
        <ButtonLink href="/admin/tags/addcategory" className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white">
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nuevo tamaño
        </ButtonLink>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <SizesTable title="Tamaños" tableData={ sizes } />
        <Pagination count={0} />
      </div>
    </section>
  )
}
