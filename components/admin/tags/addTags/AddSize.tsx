'use client'

import { useState } from 'react'
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { newSize } from '@/libs/sizes/actions';

export default function AddSize() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addNewSize = async (data : Iterable<readonly [PropertyKey, any]>) => {
    await newSize(data)
      .then( res => {
        setIsOpen(false);
      }).catch( error => {
        console.error(error)
      });
  }


  return (
    <div className="flex">
        <button
          className="flex justify-center items-center gap-3 bg-rose-100/80 hover:bg-rose-100 px-3 rounded-lg text-white"
          onClick={() => setIsOpen(true)}
          >
          <FontAwesomeIcon className="w-4 h-5" icon={faAdd} />
          Nuevo Tamaño
        </button>
        {
          isOpen && (
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full backdrop-blur-md z-10">
              <form
                action={addNewSize}
                className="flex flex-col w-full max-w-xl p-6 shadow-2xl bg-white gap-6 rounded-lg justify-center items-center"
              >
                <span className="flex self-end hover:bg-red-600 hover:text-white transition-all">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </span>
                <h2 className="text-2xl font-medium">Agregar Nuevo Tamaño</h2>
                <div className='flex flex-col gap-4'>
                  <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      name='name'
                      className="bg-slate-200 w-full max-w-sm p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                    />
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <label htmlFor="height">Alto</label>
                    <div className='flex items-center gap-2'>
                      <input
                        id="height"
                        type="text"
                        name='height'
                        className="bg-slate-200 w-full max-w-[150px] p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                      />
                      cms
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <label htmlFor="width">Ancho</label>
                    <div className='flex items-center gap-2'>
                      <input
                        id="width"
                        type="text"
                        name='width'
                        className="bg-slate-200 w-full max-w-[150px] p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                      />
                      cms
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <label htmlFor="type">Tipo</label>
                    <select
                      id="type"
                      name='type'
                      className="bg-slate-200 w-full max-w-[190px] p-2 rounded-lg border border-transparent focus:outline-none focus:border-rose-700"
                    >
                      <option value="select">Seleccionar</option>
                      <option value="rounded">Circular</option>
                      <option value="hexagonal">Hexagonal</option>
                      <option value="tube">Tubular</option>
                      <option value="scale">Escalonada</option>
                    </select>
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
