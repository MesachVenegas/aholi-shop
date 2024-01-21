import { recursive } from "@/styles/fonts";
import AddProductForm from "@/app/(protected)/_components/add-product-form";
import { getAllCategories } from "@/data/categories";
import { getAllSizes } from "@/data/sizes";
import { SizesProps } from "@/types/size";


export default async function AddNewProduct() {
  const categories = await getAllCategories();
  const sizes = await getAllSizes();

  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-full max-w-7xl shadow-2xl border h-full gap-6 m-auto bg-white rounded-lg p-8 md:p-16">
        <h1 className={`${recursive.className} text-2xl`}>
          Agregar Producto Nuevo
        </h1>
        <AddProductForm
          categories={categories as CategoryProps[]}
          sizes={ sizes  as SizesProps[]}
        />
      </div>
    </section>
  )
}
