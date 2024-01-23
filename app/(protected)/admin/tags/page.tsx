import SizesSection from '@/app/(protected)/_components/SizesSection'
import CategorySection from '@/app/(protected)/_components/CategorySection'


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
