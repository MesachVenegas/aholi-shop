'use client'

import { useEffect, useState } from 'react'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ButtonLink } from '@/components/ui'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'
import { ProductResponse } from '@/types/product'
import ProductsTable from '@/app/(protected)/_components/ProductTable';

export default function ProductsAdmin({ searchParams }: { searchParams: { product: string, page: number} }) {
  const search = searchParams?.product || '';
  const page = searchParams?.page || 1;
    const [products, setProducts] = useState<ProductResponse[]>([])
  const [count, setCount] = useState<number>(0)

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

  const getProductCount = async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'GET'
      })

      const count = await res.json();
      setCount(count)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    getProducts(search, page)
    getProductCount()
  },[page, search])


  return (
    <article className='flex flex-col gap-4'>
      <div className='flex justify-between py-3 px-6'>
        <SearchBar placeholder='Buscar un producto' query='product' />
        <ButtonLink href='/admin/products/new' className='flex items-center gap-2 font-bold bg-rose-100/80 hover:bg-rose-100 text-white px-3 py-2 rounded-md'>
          <FontAwesomeIcon icon={faPlus} className='w-4 h-4' />
          Agregar producto
        </ButtonLink>
      </div>
      <div className='flex flex-col justify-between bg-white rounded-lg shadow-xl min-h-[75vh] p-4'>
        <ProductsTable title='Listado de productos' tableData={products} />
        <Pagination count={count} />
      </div>
    </article>
  )
}
