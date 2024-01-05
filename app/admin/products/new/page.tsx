'use client'

import FormInput from "@/components/ui/FormInput"
import { recursive } from "@/components/ui/fonts"

export default function AddNewProduct() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className={`${recursive.className} text-2xl`}>
        Agregar Producto Nuevo
      </h1>
      <form className="flex w-full max-w-7xl shadow-2xl border h-full gap-6 m-auto bg-white rounded-lg p-12">
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className={`${recursive.className} text-2xl mb-4`}>Cargar imágenes</h2>
          <input type="file" name="images" id="images" title="Imágenes del producto" draggable multiple />
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xl">
          <h2 className={`${recursive.className} text-2xl mb-4`}>Detalles</h2>
          <div className="flex gap-2 items-center justify-between w-full">
            <label htmlFor="name">
              Nombre:
            </label>
            <FormInput
              id="name"
              name="name"
              type="text"
              placeholder="nombre"
            />
          </div>
          <div className="flex p-2 gap-8">
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="name">
                Altura:
              </label>
              <FormInput
                id="height"
                name="height"
                type="number"
                min={0}
                defaultValue={0}
              />
              cms
            </div>
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="name">
                Ancho:
              </label>
              <FormInput
                id="width"
                name="width"
                type="number"
                min={0}
                defaultValue={0}
              />
              cms
            </div>
          </div>
          <div className="flex p-2 gap-8">
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="name">
                Price:
              </label>
              <FormInput
                id="price"
                name="price"
                type="number"
                min={0}
                defaultValue={0}
                placeholder="nombre"
              />
              mxn
            </div>
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="category">Categoria</label>
              <select
                name="category"
                id="category"
                title="Categorías"
                className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
              >
                <option value="default">seleccionar</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between w-full">
            <label htmlFor="description">
              Descripcion
            </label>
            <textarea
              id="description"
              name="description"
              cols={30}
              rows={5}
              maxLength={180}
              className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
            />
          </div>
          <div className="flex justify-center items-center mt-6 p-4">
            <button className="py-2 w-full max-w-sm justify-center bg-rose-100/80 rounded-lg hover:bg-rose-100 font-bold text-white">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
