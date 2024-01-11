import ProductsTable from '@/components/admin/products/ProductTable'
import Pagination from '@/components/pagination/Pagination'
import SearchBar from '@/components/search/SearchBar'
import { ButtonLink } from '@/components/ui'
import { getProducts, totalProducts } from '@/libs/products/fetching'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default async function ProductsAdmin({
  searchParams
}: {
  searchParams: { search: string, page: number} }
) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || 1;
  const productsCount = await totalProducts();
  const products = await getProducts(search, page);


  return (
    <article className='flex flex-col gap-4'>
      <div className='flex justify-between py-3 px-6'>
        <SearchBar placeholder='Buscar un producto' />
        <ButtonLink href='/admin/products/new' className='flex items-center gap-2 font-bold bg-rose-100/80 hover:bg-rose-100 text-white px-3 py-2 rounded-md'>
          <FontAwesomeIcon icon={faPlus} className='w-4 h-4' />
          Agregar producto
        </ButtonLink>
      </div>
      <div className='flex flex-col justify-between bg-white rounded-lg shadow-xl min-h-[75vh] p-4'>
        <ProductsTable title='Listado de productos' tableData={products} />
        <Pagination count={productsCount} />
      </div>
    </article>
  )
}
