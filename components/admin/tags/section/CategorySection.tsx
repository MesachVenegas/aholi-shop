import SearchBar from "@/components/search/SearchBar";
import CategoriesTable from "../tables/CategoriesTable";
import { categories } from "@/libs/constants";
import Pagination from "@/components/pagination/Pagination";
import { ButtonLink } from "@/components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default async function CategorySection() {

  return (
    <section className="flex flex-col gap-2 p-4 shadow-2xl rounded-lg bg-white h-[87vh]">
      <div className="flex justify-between w-full p-2">
        <SearchBar placeholder="Buscar Categoria" />
        <ButtonLink href="/admin/tags/addcategory" className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white">
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nueva Categoria
        </ButtonLink>
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <CategoriesTable title="Categorías" tableData={ categories } />
        <Pagination count={0} />
      </div>
    </section>
  )
}
