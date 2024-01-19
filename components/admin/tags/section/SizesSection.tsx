import Pagination from "@/components/pagination/Pagination";
import SearchBar from "@/components/search/SearchBar";
import SizesTable from "../tables/SizesTables";
import { getCountSizes, getSizes } from "@/utils/sizes/data";
import AddSize from "../addTags/AddSize";


export default async function SizesSection({
  searchParams
}: {
  searchParams: { size: string, page: number }
}) {
  const search = searchParams?.size || '';
  const page = searchParams?.page || 1;
  const sizes = await getSizes(search, page);
  const count = await getCountSizes();


  return (
    <section className="flex flex-col gap-2 p-4 shadow-2xl rounded-lg bg-white h-[87vh]">
      <div className="flex justify-between w-full p-2">
        <SearchBar placeholder="Buscar Categoria" query="size" />
        <AddSize />
      </div>
      <div className="flex flex-col justify-between h-full w-full">
        <SizesTable title="Tamaños" tableData={ sizes } />
        <Pagination count={count} />
      </div>
    </section>
  )
}
