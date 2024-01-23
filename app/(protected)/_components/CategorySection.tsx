import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import AddCategory from "@/app/(protected)/_components/AddCategory";
import CategoriesTable from "@/app/(protected)/_components/CategoriesTable";
import { getCategories, getCategoriesCount } from "@/data/categories";

export default async function CategorySection({ searchParams }: { searchParams: { category: string, page: string}}) {
  const search = searchParams?.category || '';
  const page = searchParams?.page || '1';
  const categories = await getCategories(search, page);
  const categoryCount = await getCategoriesCount();

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
