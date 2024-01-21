import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'
import { ButtonLink } from '@/components/ui/ButtonLink'
import ProductsTable from '@/app/(protected)/_components/ProductTable';
import { getProductsPagination, getProductsSearch } from '@/data/products'
import { ProductProps } from '@/types/product'

export default async function ProductsAdmin({ searchParams } : { searchParams: { product: string, page: string } }) {
  const query = searchParams.product || "";
  const page = searchParams.page || "1";
  const products = await getProductsSearch(query, page);
  const productsCount = await getProductsPagination();

  return (
    <article className='flex flex-col gap-4'>
      <div className='flex justify-between gap-6 px-2'>
        <SearchBar placeholder='Buscar un producto' query='product' />
        <ButtonLink
          href='/admin/products/new'
          className='flex items-center gap-2 font-bold bg-rose-100/80 hover:bg-rose-100 text-white px-3 py-2 rounded-md'
        >
          <FontAwesomeIcon icon={faPlus} className='w-4 h-4' />
          <p className='text-sm'>
            Agregar producto
          </p>
        </ButtonLink>
      </div>
      <div className='flex flex-col justify-between bg-white rounded-lg shadow-xl h-full xl:min-h-[75vh] py-4 p-1 mt-10'>
        <ProductsTable data={products as ProductProps[]} />
        <Pagination count={productsCount} />
      </div>
    </article>
  )
}
