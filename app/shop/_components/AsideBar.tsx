import { Title4 } from "@/components/ui/Titles";
import AsideButton from "@/components/ui/AsideButton";
import { getCategorySelect } from "@/libs/categories/fetching";


export default async function AsideBar() {
  const categories = await getCategorySelect()


  return (
    <aside className="flex flex-col gap-6 w-full lg:w-72 lg:h-screen p-4">
      <div className="flex flex-col gap-3">
        <div>
          <Title4 color="text-rose-700" >Categorías</Title4>
          <hr className="w-full text-rose-100" />
        </div>
        <ul className="flex flex-wrap gap-2">
          {
            categories.map((category) => (
              <li key={category.id} >
                <AsideButton>
                  { category.name }
                </AsideButton>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
