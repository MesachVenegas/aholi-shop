import ProductsTable from '@/components/admin/products/ProductTable'
import Pagination from '@/components/pagination/Pagination'
import SearchBar from '@/components/search/SearchBar'
import { ButtonLink } from '@/components/ui'
import { products } from '@/libs/constants'
import { ProductProps } from '@/models/product'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ProductsAdmin() {

  return (
    <article className='flex flex-col gap-4'>
      <div className='flex justify-between py-3 px-6'>
        <SearchBar placeholder='Buscar un producto' />
        <ButtonLink href='/admin/products/new' className='flex items-center gap-2 font-bold bg-rose-100/80 hover:bg-rose-100 text-white px-3 py-2 rounded-md'>
          <FontAwesomeIcon icon={faPlus} className='w-4 h-4' />
          Agregar producto
        </ButtonLink>
      </div>
      <div className='p-4'>
        <ProductsTable title='Listado de productos' tableData={products} />
        <Pagination count={1} />
      </div>
    </article>
  )
}
