'use client'

import { useState } from "react"
import Image from "next/image"
import { recursive } from "@/components/ui/fonts"
import { categories } from "@/libs/constants"
import { ImagesProps, ProductFormPros } from "@/models/product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useForm, SubmitHandler } from "react-hook-form"

export default function AddNewProduct() {
  const [images, setImages] = useState<ImagesProps[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormPros>();

  const handleForm: SubmitHandler<ProductFormPros> = (data) => {
    console.log(data);
    console.log(images);
  }

  const readMultipleImages = (e: any, indexInit: number) => {
    const files = e.currentTarget.files;
    const imagesArray:ImagesProps[] = [];

    Object.keys(files).forEach( index => {
      const file = files[index];
      let url = URL.createObjectURL(file);

      imagesArray.push({
        index: indexInit,
        name: file.name,
        url,
        file
      });

      indexInit++;
    })

    return imagesArray;
  }

  const deleteImg = (index: number) => {
    const newImgs = images.filter( (element: ImagesProps) => {
      return element.index !== index;
    })

    setImages(newImgs);
  }

  const changeInput = (e: any) => {
    let indexImg;

    if(images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0
    }

    let newImgsToState = readMultipleImages(e, indexImg);
    let newImageState = [...images, ...newImgsToState];
    setImages(newImageState);

  }

  return (
    <div className="flex flex-col gap-8 p-6">
      <h1 className={`${recursive.className} text-2xl`}>
        Agregar Producto Nuevo
      </h1>
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col-reverse xl:flex-row w-full shadow-2xl border h-full gap-6 m-auto bg-white rounded-lg p-12">
        <div className="flex flex-col gap-4 w-full">
          <h2 className={`${recursive.className} text-2xl mb-4`}>Cargar imágenes</h2>
          <div className="flex flex-col justify-center items-center h-full p-4">
            <div className="flex flex-col w-full h-full justify-start items-center gap-4">
                <input
                  type="file"
                  id="images"
                  title="images"
                  draggable
                  multiple
                  onChange={ changeInput }
                />
                <div className="flex flex-wrap gap-2 w-full h-full">
                    {
                      images.map( (image) => (
                        <div key={image.index} className="flex relative w-48 h-48">
                          <div className="flex w-full justify-end items-center absolute text-white p-1">
                            <button
                              aria-label="close"
                              className="flex justify-center items-center w-[16px] h-[16px] bg-red-600"
                              onClick={ () => deleteImg(image.index)}
                            >
                              <FontAwesomeIcon icon={faXmark} className="w-4 h-4"/>
                            </button>
                          </div>
                          <Image
                            src={image.url}
                            width={200}
                            height={200}
                            alt={image.name}
                          />
                        </div>
                      ))
                    }
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full xl:max-w-lg">
          <h2 className={`${recursive.className} text-2xl mb-4`}>Detalles</h2>
          <div className="flex gap-2 items-center justify-between w-full">
            <label htmlFor="name">
              Nombre:
            </label>
            <input
              id="name"
              type="text"
              placeholder="nombre"
              className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
              {...register('name', { required: true})}
            />
          </div>
          <div className="flex p-2 gap-8">
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="price">
                Price:
              </label>
              <input
                id="price"
                type="number"
                min={0}
                defaultValue={0}
                placeholder="nombre"
                className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                {...register('price', { required: true })}
              />
              mxn
            </div>
            <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                title="Categorías"
                className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                {...register('category', { required: true })}
              >
                <option value="none">Select...</option>
                {
                  categories.map( (category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between w-full">
              <label htmlFor="sizes">Tamaños</label>
              <select
                id="sizes"
                title="Categorías"
                className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                {...register('sizes', { required: true })}
              >
                <option value="none">Select...</option>
                {
                  categories.map( (category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          <div className="flex gap-2 items-center justify-between w-full">
            <label htmlFor="description">
              Descripcion
            </label>
            <textarea
              id="description"
              cols={30}
              rows={5}
              maxLength={180}
              className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
              {...register('description', { required: true })}
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
