import { ProductResponse } from "@/models/product";
import SearchBar from "@/components/search/SearchBar";
import { getProducts } from "@/libs/products/fetching";
import Pagination from "@/components/pagination/Pagination";
import CardProduct from "@/components/shop/cardProduct/CardProduct";

export default async function ShopPage({ searchParams }: { searchParams: { product: string, page: number }}) {
  const search = searchParams?.product || '';
  const page = searchParams?.page || 1;
  const products = await getProducts(search, page);

  return (
    <div className="flex flex-col justify-center items-center p-4  pb-12">
      <div className="flex w-full">
        <div className="flex-grow"></div>
        <div className="flex items-center w-full max-w-md">
          <SearchBar placeholder="Buscar" query="product" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center xl:justify-start w-full gap-8 p-8">
        {
          products.map( (product) => (
            <CardProduct key={product.id} prod={product as unknown as ProductResponse} />
          ))
        }
      </div>
      <div className="flex items-center w-full max-w-7xl">
        <Pagination count={0} />
      </div>
    </div>
  )
}
