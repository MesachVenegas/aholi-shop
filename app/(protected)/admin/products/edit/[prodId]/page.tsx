import { SizesProps } from "@/types/size";
import { getAllSizes } from "@/data/sizes";
import { recursive } from "@/styles/fonts";
import { ProductProps } from "@/types/product";
import { getProductById } from "@/data/products";
import { getAllCategories } from "@/data/categories";
import EditProductForm from "@/app/(protected)/_components/edit-product-form";

const ProductEditPage = async ({ params } : { params: { prodId: string } }) => {
  const { prodId } = params;

  const product = await getProductById(prodId) as ProductProps;
  const categories = await getAllCategories() as CategoryProps[];
  const sizes = await getAllSizes() as SizesProps[];

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-6 p-6 bg-white rounded-lg w-full max-w-5xl">
        <h1 className={`${recursive.className} text-2xl font-bold`}>Editar producto</h1>
        <EditProductForm product={product} categories={categories} sizes={sizes}  />
      </div>
    </div>
  )
}

export default ProductEditPage;