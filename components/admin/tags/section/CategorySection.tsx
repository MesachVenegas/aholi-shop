import SearchBar from "@/components/search/SearchBar";
import CategoriesTable from "../tables/CategoriesTable";
import Pagination from "@/components/pagination/Pagination";
import { getCategories, getCountCategories } from "@/libs/categories/fetching";
import AddCategory from "../addTags/AddCategory";

export default async function CategorySection({ searchParams }: { searchParams: { category: string, page: number}}) {
  const search = searchParams?.category || '';
  const page = searchParams?.page || 1;
  const categories = await getCategories(search, page);
  const categoryCount = await getCountCategories();

  return (
    <section className="flex flex-col gap-2 p-4 shadow-2xl rounded-lg bg-white h-[87vh]">
      <div className="flex justify-between w-full p-2">
        <SearchBar placeholder="Buscar Categoria" query="category" />
        <AddCategory />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <CategoriesTable title="Categorías" tableData={ categories } />
        <Pagination count={categoryCount} />
      </div>
      {

      }
    </section>
  )
}
