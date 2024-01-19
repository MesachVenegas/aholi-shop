'use client'

import SearchBar from "@/components/search/SearchBar";
import Pagination from "@/components/pagination/Pagination";
import CardProducts from "@/components/shop/cardProduct/CardProduct";
import { useEffect, useState } from "react";
import { ProductResponse } from "@/types/product";



export default function ShopPage({ searchParams }: { searchParams: { product: string, page: number }}) {
  const search = searchParams?.product || '';
  const page = searchParams?.page || 1;
  const [products, setProducts] = useState<ProductResponse[]>([])

  const getProducts = async (search: string, page: number) => {
    try {
      const response = await fetch('/api/products', {
        method: "POST",
        body: JSON.stringify({search,page})
      })

      const products = await response.json();
      setProducts(products)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(  () => {
    getProducts(search, page)
  },[search, page])

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
          products.map( (product: ProductResponse) => (
            <CardProducts prod={product} key={product.id} />
          ))
        }
      </div>
      <div className="flex items-center w-full max-w-7xl">
        <Pagination count={0} />
      </div>
    </div>
  )
}
