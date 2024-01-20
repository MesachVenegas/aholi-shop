import CategorySection from '@/components/admin/tags/section/CategorySection'
import SizesSection from '@/components/admin/tags/section/SizesSection'


export default function CategoriesAdmin({ searchParams }: { searchParams: {category: string, page: number, size: string}}) {


  return (
    <div>
      <div className='flex flex-col xl:flex-row w-full gap-8 p-4'>
          <div className='w-full xl:w-1/2'>
            <CategorySection searchParams={searchParams} />
          </div>
          <div className='w-full xl:w-1/2'>
            <SizesSection searchParams={searchParams} />
          </div>
      </div>
    </div>
  )
}
