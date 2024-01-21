'use client'

import { useState } from "react";
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newCategory } from "@/libs/categories/actions";

export default function AddCategory() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addCategory = async (data: Iterable<readonly [PropertyKey, any]>) => {
    await newCategory(data)
      .then( res => {
        setIsOpen(false)
      }).catch( error  => {
        console.error(error);
      })
  }

  return (
      <div className="flex">
        <button
          className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white"
          onClick={() => setIsOpen(true)}
          >
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nueva Categoria
        </button>
        {
          isOpen && (
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur-md z-10">
              <form
                action={addCategory}
                className="flex flex-col w-full max-w-xl p-6 shadow-2xl bg-white gap-6 rounded-lg justify-center items-center"
              >
                <span className="flex self-end hover:bg-red-600 hover:text-white transition-all">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </span>
                <h2 className="text-2xl font-medium">Agregar Categoria</h2>
                <div>
                  <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="description">Descripcion</label>
                    <input
                      id="description"
                      type="text"
                      name="description"
                      className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                    />
                  </div>
                </div>
                <div className="flex justify-around w-full p-2">
                  <button
                    type="reset"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center py-2 px-3 bg-red-500/80 text-white rounded-lg font-bold hover:bg-red-500"
                  >
                    Cancelar
                  </button>
                  <button className="flex justify-center items-center py-2 px-3 bg-rose-100/80 text-white rounded-lg font-bold hover:bg-rose-100">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          )
        }
      </div>
  )
}
