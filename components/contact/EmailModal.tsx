import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function EmailModal({ setConfirm }: { setConfirm: (state:boolean) => void}) {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className='fixed inset-0 w-screen h-screen'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <Dialog.Panel className="flex flex-col gap-2 mx-auto max-w-md rounded-md bg-slate-300/90 shadow-xl p-6" >
            <Dialog.Title className="text-2xl font-bold">Mensaje Enviado</Dialog.Title>
            <p>
              Gracias por ponerte en contacto con nosotros, en breve revisaremos tu correo
              y nos pondremos en contacto de se ser necesario.
            </p>

            <button
              className='flex justify-center items-center py-1 bg-blue-500 w-28 m-auto rounded-md text-white hover:bg-blue-600 font-bold'
              onClick={() => {
                setIsOpen(false)
                setConfirm(false);
              }}
            >
              Ok
            </button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}