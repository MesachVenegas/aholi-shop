import CategorySection from '@/components/admin/tags/section/CategorySection'
import SizesSection from '@/components/admin/tags/section/SizesSection'


export default function CategoriesAdmin() {
  return (
    <div>
      <div className='flex flex-col xl:flex-row w-full gap-8 p-4'>
          <div className='w-full xl:w-1/2'>
            <CategorySection />
          </div>
          <div className='w-full xl:w-1/2'>
            <SizesSection />
          </div>
      </div>
    </div>
  )
}
