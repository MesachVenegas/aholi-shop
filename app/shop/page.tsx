import Image from "next/image";

import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import CardProducts from "@/app/shop/_components/CardProduct";
import { getProductsPagination, getProductsSearch } from "@/data/products";



export default async function ShopPage({ searchParams }: { searchParams: { product: string, page: string }}) {
  const search = searchParams?.product || '';
  const page = searchParams?.page || "1";
  const products = await getProductsSearch(search, page);
  const count = await getProductsPagination();



  return (
    <div className="flex flex-col justify-center items-center p-4  pb-12">
      <div className="flex w-full md:justify-end px-6">
          <SearchBar placeholder="Buscar" query="product"/>
      </div>
      <div className="flex flex-wrap justify-center xl:justify-start w-full gap-8 p-2 md:p-6 mt-10">
        {
          products.length !== 0 ?
          (
            products.map( (product) => (
              <CardProducts prod={product} key={product?.id} />
            ))
          ) : (
            <div className="flex flex-col w-full h-full min-h-[80vh] justify-center items-center gap-6 px-10">
              <Image
                src='/assets/empty_products.png'
                width={360}
                height={360}
                alt="empty products"
              />
              <h2 className="text-4xl">No pude encontrar tu producto 🥺</h2>
            </div>
          )
        }
      </div>
      <div className="flex items-center w-full max-w-7xl">
        <Pagination count={count} />
      </div>
    </div>
  )
}
